import { query } from '@/entities/realm/lib';
import { ITag } from '@/entities/tag';
import { QueryFn } from '@/shared/types';
import { Realm } from '@realm/react';

export interface ITask {
  id: Realm.BSON.ObjectId;
  name: string;
  hours: number;
  minutes: number;
  seconds: number;
  lastActive: Date;
  isActive: boolean;
  isComplete: boolean;
  createdAt: Date;
  tags?: ITag[];
}

export class Task extends Realm.Object implements ITask {
  public id!: Realm.BSON.ObjectId;
  public name!: string;
  public hours!: number;
  public minutes!: number;
  public seconds!: number;
  public lastActive!: Date;
  public isActive!: boolean;
  public isComplete!: boolean;
  public createdAt!: Date;
  public tags?: ITag[];

  public static schema: Realm.ObjectSchema = {
    name: 'Task',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      name: { type: 'string', indexed: true },
      hours: 'int',
      minutes: 'int',
      seconds: 'int',
      isActive: 'bool',
      lastActive: 'date',
      isComplete: 'bool',
      tags: {
        type: 'list',
        objectType: 'Tag',
        default: [],
      },
      createdAt: 'date',
    },
  };

  public static generate(
    task: Omit<ITask, 'createdAt' | 'id' | 'lastActive' | 'isActive' | 'isComplete'>,
  ): ITask {
    return {
      ...task,
      id: new Realm.BSON.ObjectId(),
      isActive: false,
      isComplete: false,
      lastActive: new Date(),
      createdAt: new Date(),
    };
  }

  public static filters = {
    getActives() {
      return 'isActive == true';
    },
  };

  public static deactivateAll: QueryFn = (realm) => {
    query(realm, () => {
      realm.objects(this).filtered(this.filters.getActives()).update('isActive', false);
    });
  };

  public static activate: QueryFn<ITask> = (realm, task) => {
    query(realm, () => {
      this.deactivateAll(realm, null);
      task.isActive = true;
    });
  };

  public static deactivate: QueryFn<ITask> = (realm, task) => {
    query(realm, () => {
      task.isActive = false;
    });
  };

  public static create: QueryFn<ITask> = (realm, task) => {
    query(realm, () => {
      this.deactivateAll(realm, null);
      const newTask = realm.create(this, task);
      this.activate(realm, newTask);
    });
  };
}
