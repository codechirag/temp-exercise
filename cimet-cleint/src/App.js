import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaLightbulb, FaFilter, FaMapMarkerAlt, FaInfoCircle, FaCheck, FaSolarPanel } from "react-icons/fa";
import './App.css';
import parse from 'html-react-parser';
import { Button, Card, CardBody, CardBottom, CardTop, Chip, CompareBox, Container, Count, Header, LinkBox, PriceBox } from './components/styles/Card.styled';

function App(props) {
  const [state, setState] = useState();
  const [dataCount, setDataCount] = useState();
  const [token, setToken] = useState();
  const tokenURL = 'http://localhost:3001/generate-token';
  const fetchURL = 'http://localhost:3001/plan-list-temp-server?token=';
  const API_KEY = '4NKQ3-815C2-8T5Q2-16318-55301';
  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE2NzUwODE0MTksImV4cCI6MTY3NTA5MjIxOSwibmJmIjoxNjc1MDgxNDE5LCJqdGkiOiI4T1JmNElIV2RCVDYydGdmIn0.vOecknP1XNaY_9R53R_EX0A7PQYUWiaWFiKJ2m-jFOw'
  const headers = {
    'Api-key': API_KEY,
    'Content-Type': 'application/json'
  };

  axios.get(tokenURL, {
    headers: { headers }
  }).then((response) => {
    setToken(response.data.data.token);
    axios.get(fetchURL + token, {
      headers: { headers }
    }).then((response) => {
      console.log('data', response.data.data.electricity);
      setState(response.data.data);
      setDataCount(Object.keys(response.data.data.electricity).length);
    });
  }
  );


  // async function generateAccessToken(){
  //   const response = await axios.get( tokenURL, {
  //     headers: { headers }
  //   });
  //   // setToken(response.data.data.token);
  // }

  // async function fetchAPIData() {
  //   const response = await axios.get(fetchURL + token, {
  //     headers: { headers }
  //   });
  //   console.log('data', response.data.data.electricity);
  //   setState(response.data.data);
  //   setDataCount(Object.keys(response.data.data.electricity).length);
  // }

  useEffect(() => {
    // generateAccessToken();
    // fetchAPIData();
    // setTimeout(fetchAPIData(),1000);
  }, [dataCount]);
  return (
    <Container>
      <Header>
        <div className='header-left'>
          <Button bgColor='#002e71' radius='5px'>Electricity <Count>{dataCount}</Count></Button>
        </div>
        <div className='header-right'>
          <span className='location' style={{ marginRight: '10px' }}><span className='filter-icon'><FaMapMarkerAlt /></span>2000, NSW</span>
          <Button bgColor='#002e71' radius='5px'><FaFilter className='filter-icon' />Filter</Button>
        </div>
        <div className='header-text'><FaInfoCircle /> Initial recommendations are based on average medium usage as determined by relevant energy regulators, please view the information hover next to the estimated cost box for more infrmation. For a more accurate comparison relevant to your circumstances, please use the Bill Details tab onthe resuits page to enter your most recent energy bill details.</div>
      </Header>
      {state?.electricity && state.electricity.map((value, id) => {
        return (
          <Card className='cardWrapper' key={id}>
            <div className='chip-wrap'>
              <Chip><FaLightbulb className='chipIcon' />{value.energy_type}</Chip>
              {value.solar_compatible === 'yes' ? <Chip><FaSolarPanel className='chipIcon' />Solar</Chip> : ''}
            </div>
            <CardTop>
              <LinkBox>
                <img src={value.provider_image} alt='provider-image' width='100' /><br />
                <a href='#'>View Details</a><br />
                <a href={value.plan_document || '#'}>Basic Plan Information Document</a>
              </LinkBox>
              <CompareBox>
                <div className='price-compare'>
                  {value.dmo_percentage.Ausgrid}<br />
                  <span>the current reference price</span>
                </div>
                <div className='benefits'>
                  <span><FaCheck />{value.view_benefit.replace(/(<([^>]+)>)/ig, '')}</span>
                  <span><FaCheck />{value.view_bonus.replace(/(<([^>]+)>)/ig, '')}</span>
                  <span><FaCheck />{value.view_contract.replace(/(<([^>]+)>)/ig, '')}</span>
                  <span><FaCheck />{value.view_discount.replace(/(<([^>]+)>)/ig, '').replace('\&nbsp;', '')}</span>
                  <span><FaCheck />{value.view_exit_fee.replace(/(<([^>]+)>)/ig, '')}</span>
                </div>
              </CompareBox>
              <PriceBox>
                <p>Estimated cost <FaInfoCircle /> </p>
                <div className='prices'>
                  <span className='bill-amount'>${value.expected_bill_amount}^</span><span>/yr</span><br />
                  <span className='bill-amount-monthly'>${value.expected_monthly_bill_amount}</span><span>/mo</span>
                </div>
              </PriceBox>
            </CardTop>
            <CardBody>
              {parse(value.dmo_content.Ausgrid)}
            </CardBody>
            <CardBottom>
              <div className='features'>
                <span><FaCheck />{parse(value.cooling_off_period)} cooling period </span>
                {value.credit_card_service_fee.includes('No credit card fees') && <span> <FaCheck /> {parse(value.credit_card_service_fee)} </span>}
              </div>
              <span className='tc'>{parse(value.terms_condition)}</span>
            </CardBottom>
          </Card>
        )
      }
      )}

    </Container>
  );
}

export default App;

