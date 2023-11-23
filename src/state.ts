const state = {
  data: {
    list: [],
  },

  listeners: [], //array de funciones

  getState() {
    return this.data;
    //Te devuelve la ultima version del estado
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
    // te avisa cuando algun componente cambia el estado
  },

  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
  },

  addItem(item: string[] = []) {
    const currentState = this.getState(); ///Obtengo la ultima version del state
    console.log("addItem currenState:", currentState);
    console.log("item", item);
    currentState.list.push(item); /// Agrego el string al array list de Data{ list:[]}

    this.setState(currentState); //cs  este ultimo estado es el que voy a guardar//
  },
};

export { state };
