import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';



const SearchBar_Home = () => {
    const navigate = useNavigate();
    const clickSearchBar = ()=>{
        navigate('/searchhospital')
    }
    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    onClick={clickSearchBar}
                    placeholder="병원/진료과 검색" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </InputGroup>
        </div>
    );
}

export default SearchBar_Home;