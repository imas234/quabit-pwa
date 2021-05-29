import { makeAutoObservable } from "mobx";

class CardStore {
    list = {};

    constructor() {
        makeAutoObservable(this);
    }

    addCard(title) {
        let id = Math.floor(Math.random() * 1000000).toString(16);
        while(id in this.list) {
            id = Math.floor(Math.random() * 1000000).toString(16);
        }
        this.list[id] = {
            id,
            title,
            streak: 0,
        };
    }

    editCard(id, edit) {
        this.list[id].title = edit;
    }

    deleteCard(id) {
        delete this.list[id];
    }

    incrementStreak(id) {
        this.list[id].streak += 1;
    }

    decrementStreak(id) {
        this.list[id].streak = (this.list[id].streak 
            ? this.list[id].streak - 1 : 0);
    }
}

export default new CardStore();