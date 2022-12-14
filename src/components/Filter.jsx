
import { Link } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import categorydata from "../data/categorydata";
import categorydata1 from "../data/categorydata1";
import DataContext from "../data/DataContext";


const Filter = () => {
    const {state,action}= useContext(DataContext);
    const [isFilter, setIsFilter] = useState(false);

    // 필터버튼 이벤트 함수
    const handleBtns = (e) => {
        setIsFilter == true ? setIsFilter(false) : setIsFilter(true);
        let word = e.target.value;
        if (word === 'Major') {
            action.setCategory(categorydata);
        } else if (word === 'Place') {
            action.setCategory(categorydata1);
        }
    }
    return (
        <>
            <div className="filter__container">
                <div>
                    <button className="filter__btn" value='Place' onClick={handleBtns}>지역별</button>
                    <button className="filter__btn" value='Major' onClick={handleBtns}>진료별</button>
                </div>
                <div className="category__container">
                    {
                        isFilter == true ?
                            state.category == categorydata1 ? categorydata1.map((item, id) => {
                                return (
                                    <div key={id} className="category__box">
                                        <Link className="linktext" to={'/placedetail/' + id + '/'}>
                                            <span>{item.icon}</span>
                                            <h4>{item.name}</h4>
                                            
                                        </Link>
                                    </div>
                                )
                            }) : categorydata.map((item, id) => {
                                return (
                                    <div key={id} className="category__box">
                                        <Link className="linktext" to={'/majordetail/' + id + '/'}>
                                            <span>{item.icon}</span>
                                            <h4>{item.name}</h4>
                                        </Link>
                                    </div>
                                )
                            }) : null
                    }
                </div>
            </div>
        </>
    );
}

export default Filter;