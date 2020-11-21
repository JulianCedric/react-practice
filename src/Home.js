import React from 'react';
import More from './More';
import Less from './Less';
import quotesContainer from './quotesContainer'; 

const QUOTES = [
    {
    "id": 4,
    "user_id": 1,
    "name": "",
    "description": "Write 1 new thing I learned today in my journal before bedtime",
    "quote": "'Practice isn't the thing you do once you're good. It's the thing you do that makes you good.' -Malcolm Gladwell",
    "dateCreated": null,
    "column": "A",
    "counter": 0,
    "percentage": 0,
    "dailyWinConfirmation": false,
    "created_at": "2020-09-28T06:07:03.054Z",
    "updated_at": "2020-09-28T06:07:03.054Z"
    },
    {
    "id": 5,
    "user_id": 1,
    "name": "",
    "description": "Practice piano for at least 20 minutes",
    "quote": "'Successful people are simply those with successful habits.' -Brian Tracy",
    "dateCreated": null,
    "column": "A",
    "counter": 0,
    "percentage": 0,
    "dailyWinConfirmation": false,
    "created_at": "2020-09-28T06:07:03.075Z",
    "updated_at": "2020-09-28T06:07:03.075Z"
    },
    {
    "id": 6,
    "user_id": 1,
    "name": "",
    "description": "Read at least 3 pages of a fiction novel",
    "quote": "'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.' -Albert Einstein",
    "dateCreated": null,
    "column": "A",
    "counter": 0,
    "percentage": 0,
    "dailyWinConfirmation": false,
    "created_at": "2020-09-28T06:07:03.097Z",
    "updated_at": "2020-09-28T06:07:03.097Z"
    },
    {
    "id": 7,
    "user_id": 1,
    "name": "",
    "description": "Water plants in my room!",
    "quote": "'Drop by drop is the water pot filled.' -BUDDHA",
    "dateCreated": null,
    "column": "A",
    "counter": 20,
    "percentage": 90,
    "dailyWinConfirmation": false,
    "created_at": "2020-09-28T06:07:03.106Z",
    "updated_at": "2020-09-28T06:07:03.106Z"
    },
    {
    "id": 8,
    "user_id": 1,
    "name": "",
    "description": "Drink 1 more glass of water today",
    "quote": "'I fear not the man who has practiced 10,000 kicks, but I do fear the man who has practiced one kick 10,000 times.' -BRUCE LEE",
    "dateCreated": null,
    "column": "A",
    "counter": 7,
    "percentage": 33,
    "dailyWinConfirmation": false,
    "created_at": "2020-09-28T06:07:03.113Z",
    "updated_at": "2020-09-28T06:07:03.113Z"
    },
    {
    "id": 9,
    "user_id": 1,
    "name": "",
    "description": "Make bed before morning jog",
    "quote": "'The chains of habit are too weak to be felt until they are too strong to be broken.'   --Samuel Johnson",
    "dateCreated": null,
    "column": "C",
    "counter": 21,
    "percentage": 100,
    "dailyWinConfirmation": false,
    "created_at": "2020-09-28T06:07:03.125Z",
    "updated_at": "2020-09-28T06:07:03.125Z"
    },
    {
    "id": 10,
    "user_id": 1,
    "name": "",
    "description": "Prep gym clothes next to bed the night before a work-out day",
    "quote": "'Let today be the day you give up who you've been for who you can become.' -Hal Elrod",
    "dateCreated": null,
    "column": "C",
    "counter": 21,
    "percentage": 100,
    "dailyWinConfirmation": false,
    "created_at": "2020-09-28T06:07:03.132Z",
    "updated_at": "2020-09-28T06:07:03.132Z"
    },
    {
    "id": 11,
    "user_id": 1,
    "name": "",
    "description": "Study / Practice Algorithms & Data Structures for at least an hour",
    "quote": "'It's not what we do once in a while that shapes our lives, but what we do consistently.' -Tony Robbins",
    "dateCreated": null,
    "column": "C",
    "counter": 21,
    "percentage": 100,
    "dailyWinConfirmation": false,
    "created_at": "2020-09-28T06:07:03.139Z",
    "updated_at": "2020-09-28T06:07:03.139Z"
    }
    ]

class Home extends React.Component {
    state = {  
        quotes: QUOTES
    }

    render() { 
        console.log(this.state.quotes)
        return (  
                <div> 
                    <h1>— Home Page —</h1>
                    <quotesContainer quotes={this.state.quotes} />
                    <Less/>
                </div> 
        );
    }
}
 
export default Home;