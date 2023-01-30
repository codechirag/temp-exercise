import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Action = () => {
    const [state, setState] = useState();
    const [token, setToken] = useState();
    const tokenURL = 'http://localhost:3001/generate-token';
    const fetchURL = 'http://localhost:3001/plan-list-temp-server?token=';
    const API_KEY = '4NKQ3-815C2-8T5Q2-16318-55301';
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE2NzQ4MjgyMDgsImV4cCI6MTY3NDgzOTAwOCwibmJmIjoxNjc0ODI4MjA4LCJqdGkiOiJrTFpsNG1VdjlaODRnU1RwIn0.G0AePoWwFu0sElsntLZSgkI53XycRRaXR_yBF0viCr0'  
    const headers={
      'Api-key' : API_KEY, 
      'Content-Type' : 'application/json'
    };
    async function generateAccessToken(){
      const response = await axios.get( tokenURL, {
        headers: { headers }
      });
      setToken(response.data.data.token);
    }
  
    async function fetchAPIData() {
      const response = await axios.get( fetchURL + token, {
        headers: { headers }
      });
      // console.log('data',response.data.data);
      setState(response.data.data);
    }
    useEffect(() => {
      generateAccessToken();
    }, []);
    useEffect(() => {
      setTimeout(fetchAPIData(),1000);
    }, [token]);
  return (
    <div>

    </div>
  )
}

export default Action;