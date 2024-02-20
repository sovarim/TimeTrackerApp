import { query } from '@/shared/db/realm/lib';
import { ITask } from '@/entities/task';
import { QueryFn } from '@/shared/types';
import { Realm } from '@realm/react';

export interface ITag {
  id: Realm.BSON.ObjectId;
  name: string;
  tasks?: ITask[];
}

export class Tag extends Realm.Object implements ITag {
  public id!: Realm.BSON.ObjectId;
  public name!: string;
  public tasks?: ITask[];

  public static schema: Realm.ObjectSchema = {
    name: 'Tag',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      name: 'string',
      tasks: {
        type: 'linkingObjects',
        objectType: 'Task',
        property: 'tags',
      },
    },
  };

  public static generate(task: Omit<ITag, 'id' | 'tasks'>): ITag {
    return {
      ...task,
      id: new Realm.BSON.ObjectId(),
    };
  }

  public static create: QueryFn<ITag> = (realm, tag) => {
    query(realm, () => {
      realm.create(this, tag);
    });
  };
}
