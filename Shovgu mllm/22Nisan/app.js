const getData = async () => {
    let res = await axios.get("http://localhost:3000/users");
    let { data } = res.data; 
    return data;
};







    