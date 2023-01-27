var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/generate-token', function (req, res, next) {
  var config = {
    method: 'post',
    url: 'https://devcore02.cimet.io/v1/generate-token',
    headers: {
      'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301'
    }
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return res.status(200).send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get('/plan-list-temp-server', function (req, res, next) {
  var token = req.query.token;
  var data = JSON.stringify({"session_id":"eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"});

  var config = {
    method: 'post',
    url: 'https://devcore02.cimet.io/v1/plan-list',
    headers: {
      'Auth-token': token,
      'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
      'Content-Type': 'application/json',
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log('server err');
      res.status(500).end()
    });

})

module.exports = router;
