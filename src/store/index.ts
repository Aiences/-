
import { createStore } from 'vuex'

type UserProps = {
    isLogin: boolean;
    name?: string;
    userId?: number;
}

type tableDataItem = {
    readonly id: number,
    title: string,
    describe: string,
}

export interface GlobalDataProps {
    users: UserProps,
    tableData: tableDataItem[]
}

const store = createStore<GlobalDataProps>({
    state: {
        users: {
            isLogin: false
        },
        tableData: [
            {
                id: 1,
                title: 'test',
                describe: 'lllllllll',
            },
            {
                id: 2,
                title: 'ooo',
                describe: 'lllllllll',
            }
        ]
    },
    getters: {
        getItemById: (state) => (id: number) => {
            return state.tableData.find(item => item.id === id)
        }

    },
    mutations: {
        login(state) {
            state.users = { ...state.users, isLogin: true, name: 'wwj' }
        }
    },
    actions: {

    },

});

export default store;