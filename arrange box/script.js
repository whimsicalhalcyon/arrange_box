'use strict'

const App = {
    data() {
        return {
            title: 'averange box',
            notes_left: [{name:'заметка 1', count:2}, {name:'заметка 2', count:4}, {name:'заметка 3', count:1}],
            notes_right: [],
            currentValue: '',
            countValue: '',
            selectedIndex: -1,

        }
    },
    methods: {
        addNote() {
            if(this.currentValue !== '') {
                this.notes_left.push({name:this.currentValue, count: this.countValue});
                this.currentValue = ''
                this.currentValue = ''
            }
        },
        

        removeNote(index, event) {
            this.notes_left.splice(index,1);
            console.log(event.target)
        },

        moveNoteRight() {
            let ind = this.notes_left.findIndex(n => n.name === this.selectedIndex.name);
            this.notes_right.push(this.notes_left[this.selectedIndex]);
            this.notes_left.splice(ind,1);
            this.selectedIndex = null;
        },

        moveNoteLeft() {
            let ind = this.notes_right.findIndex(n => n.name === this.selectedIndex.name);
            this.notes_left.push(this.notes_right[this.selectedIndex]);
            this.notes_right.splice(ind,1);
            this.selectedIndex = null;
        },

    },
    computed : {
        countNote() {
            let summ = 0;
            this.notes_right.forEach(note => {
                summ += note.count
                
            });
            return summ
        }
    }
}


const app = Vue.createApp(App);
app.mount('#app'); 
