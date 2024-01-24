const express = require("express")
const cors = require("cors")
const {exec} = require("child_process");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());



function isValidArray(input) {
  try {
 
    // Check if the parsed value is an array
    return Array.isArray(input);
  } catch (error) {
    return false; // Parsing failed, so it's not a valid array
  }
}

function parseOutput(output){
  const res = {};
  res.expected = [];
  res.output = [];
  
  const p = output.split('\n');
  const n = p.length;

  for(let i=0;i<n-1;i++){
     const pair = p[i].split(' ');
     res.expected.push(parseInt(pair[0]));
     res.output.push(parseInt(pair[1]));

  }
  res.passed = parseInt(p[n-1][0]);
  return res;
}



function convertToArray(tsc) {
  try{
    const temp = tsc.split('\n').filter(item => item.trim() !== '');
    const result  = [];
     for(let i=0;i<temp.length;i++){
        result.push(JSON.parse(temp[i]));
     }
     return result;
  }
  catch(err){
   //
  }


}



function convertTestcases(tsc){

   const testcases = convertToArray(tsc);

   if(!isValidArray(testcases)) return -1;
    const t = JSON.stringify(testcases)
   let res = "const vector<vector<int>> userTestcase = ";
   for(let i=0;i<t.length;i++){
    if(t[i]==="["){
      res+="{"
    }
    else if(t[i]==="]"){
      res+="}"
    }
    else  res+=t[i];
   }
   console.log(res);
   return res+=";";
   

}


const BoilerPlate = "#include<bits/stdc++.h>\nusing namespace std;\n"


app.post("/runcode",(req,res)=>{
    
    const {code,testcases}  = req.body;
    const tsc = convertTestcases(testcases);
    if(tsc===-1) return res.json({err:"Invalid testcase"});
    //testcases
    fs.writeFileSync("./testcase/userTestcase.cpp","");
    fs.writeFileSync("./testcase/userTestcase.cpp",BoilerPlate);
    fs.writeFileSync("./testcase/userTestcase.cpp",tsc);

    fs.writeFileSync("./userfile/solution.cpp","")
    fs.writeFileSync("./userfile/solution.cpp",BoilerPlate)
    fs.appendFileSync("./userfile/solution.cpp",code)
    exec("g++ -o a.exe test.cpp",(err,stdout,stderr)=>{
          if(err){
            return res.json({err:err.message});
            
          }
          
          if(stderr){
            return res.json({err:stderr});
          }

         exec("a.exe",(err,stdout,stderr)=>{
            if(err){
                console.log(err.message)
                return;
            }

            if(stderr){
                return res.json({err:stderr});
            }
            const output = parseOutput(stdout);
            console.log(output);
            return res.json(output);
         })

    })

    
})


app.listen("3000",()=>{
    console.log("SERVER STARTED AT PORT:3000")
})