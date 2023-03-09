
import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import OrderBook from './components/OrderBook';

function App() {

    //let result=[];
    
    const [orderDatas, setData] = useState([]);

    //ready
    useEffect( () => {
        searchAll()
    },[])

    const searchAll = async()=>{

        try {
        
            const response = await axios.get('/movies');  //서버에 데이터 비동기 요청axios
        
            console.log(response.data)
        
            setData(response.data);
        
        } catch(e){
        
            console.log(e);
        }
        
       // console.log(result)

    }

    //
    // const onClick = async()=>{
    //     try{
    //       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');  
    //       setData(response.data);  
    //     }catch(e){
    //       console.log(e);
    //     }
    //   }
    //   return (
    //     <div>
    //       <div>
    //         <button onClick={onClick}>불러오기</button>
    //       </div>
    //       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    //     </div>
    //   );
    //
    
    const searchCondion = async()=>{

        //서버에 데이터 비동기 요청axios
        alert('searchCondion')
         await axios.get('/movies',{isu_cd:'MTC',trd_dd:'20181215',ord_acpt_no_from:'1',ord_acpt_no_to:'100'});
        
        //console.log(result)

    }


    // {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


    //데이타를 넘겨줌.
  return (
    <div className="App">
        
      <OrderBook orderDatas={orderDatas}/>
      
    </div>
  );
}

export default App;
///
// return (
//     <table>
//       <thead>
//         <tr>
//           {obj.header.map((item) => {
//             return <th>{item}</th>;
//           })}
//         </tr>
//       </thead>
//       <tbody>
//         {obj.data.map((item) => {
//           return (
//             <tr>
//               <td>{item.fruit}</td>
//               <td>{item.price}</td>
//               <td>{item.ea}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }
///