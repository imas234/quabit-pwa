import { makeAutoObservable, autorun } from "mobx";
const SAVED_LIST_NAME = "QUABIT_CARDLIST";

class CardStore {
    list = {};

    constructor() {
        makeAutoObservable(this);
        const storedJson = localStorage.getItem(SAVED_LIST_NAME)
		if (storedJson) Object.assign(this, JSON.parse(storedJson))
		autorun(() => {
			localStorage.setItem(SAVED_LIST_NAME, JSON.stringify(this))
		})
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

    editCard(id, title, streak) {
        this.list[id].title = title;
        this.list[id].streak = streak;
    }

    deleteCard(id) {
        delete this.list[id];
    }

    incrementStreak(id) {
        this.list[id].streak += 1;
    }

    reset() {
		localStorage.removeItem(SAVED_LIST_NAME);
	}
}

export default new CardStore();