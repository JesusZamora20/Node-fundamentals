function anotherfunction(){
    itsbroke();
}

function itsbroke(){
    return 3 +Z;
}

function itsbrokeasync(callback){
    setTimeout(()=>{
        try{
            return 3 + z;
        } catch (err){
            console.error('omg something is broke')
            callback(err.message)
            console.error('Error captured')
        }
        
    })
}

try{
    // anotherfunction();
    itsbrokeasync((msg)=>{
        console.log(msg);
    });
} catch (error){
    console.error('Whoops..its broke');
    console.error(error.message);
}
