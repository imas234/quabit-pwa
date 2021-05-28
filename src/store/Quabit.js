import { makeAutoObservable } from "mobx";

class Quabit {
    list = {};
    id = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addCard(title) {
        this.id += 1;
        this.list[this.id] = {
            id: this.id,
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

export default new Quabit();