export const query = (realm: Realm, callback: () => void) => {
  if (realm.isInTransaction) {
    callback();
    return;
  }
  realm.write(() => {
    callback();
  });
};
