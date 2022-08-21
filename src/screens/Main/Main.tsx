import { useQuery, useRealm } from '@/entities/realm';
import { Tag } from '@/entities/tag';
import { Task } from '@/entities/task';
import { Colors, Spacing, Styles } from '@/shared/theme';
import { ScreenView, TimeCard, Typography } from '@/shared/ui';
import { DotsIcon } from '@/shared/ui/icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, Button, StyleSheet, View } from 'react-native';
import _BackgroundTimer from 'react-native-background-timer';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Main = () => {
  const stopwatchId = useRef<number | null>(null);
  const [seconds, setSecodns] = useState(0);
  const tasks = useQuery(Task);
  const realm = useRealm();

  console.log(tasks);

  useEffect(() => {
    const listener = AppState.addEventListener('change', (appState) => {
      console.log(appState);
    });
    return () => listener.remove();
  }, []);

  const start = useCallback(() => {
    Task.create(
      realm,
      Task.generate({
        hours: 0,
        minutes: 0,
        name: 'Task',
        seconds: 0,
      }),
    );
  }, [realm]);

  const stop = useCallback(() => {
    realm.write(() => {
      const _tasks = realm.objects(Task);
      if (!_tasks.length) {
        return;
      }
      realm.delete(_tasks[_tasks.length - 1]);
      console.log(_tasks);
    });
  }, [realm]);

  const toggleStatus = (task: Task & Realm.Object) => {
    Task.activate(realm, task);
  };

  return (
    <ScreenView safeArea>
      <View style={styles.container}>
        <Typography variant='title'>Task</Typography>
        <DotsIcon color={Colors.blackGray} />
      </View>
      <TimeCard seconds={seconds} />
      <TouchableWithoutFeedback onPress={start}>
        <Typography>start</Typography>
      </TouchableWithoutFeedback>
      <View style={{ marginTop: Spacing[4] }}>
        <TouchableWithoutFeedback onPress={stop}>
          <Typography>stop</Typography>
        </TouchableWithoutFeedback>
      </View>
      {tasks.map((task) => {
        return (
          <TouchableWithoutFeedback key={task.id.toHexString()} onPress={() => toggleStatus(task)}>
            <Typography>{String(task.isActive)}</Typography>
          </TouchableWithoutFeedback>
        );
      })}
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.rowBetweenCenter,
    marginTop: Spacing[8],
    marginBottom: Spacing[6],
  },
});

export default Main;
