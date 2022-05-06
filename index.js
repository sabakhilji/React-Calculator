class Calculator extends React.Component{
  constructor(props){
    super(props);
    // state and bind methods
    this.state={
      display:'0',
      previous:'0',      
      operator:"",
      initiate:true,
      isoperator:false,
      lastclicked:""
    };
    this.handleChange=this.handleChange.bind(this);
    this.calculate=this.calculate.bind(this);
    this.handleOperator=this.handleOperator.bind(this);
  }
 
  
  calculate(e) {
     if(e.target.id=="equals"){
   let result=0
   if(this.state.operator=="+"){     result=parseFloat(this.state.previous)+parseFloat(this.state.display);
   }
   else if(this.state.operator=="-"){
     result=parseFloat(this.state.previous)-parseFloat(this.state.display);
   }
   else if(this.state.operator=="*"){     result=parseFloat(this.state.previous)*parseFloat(this.state.display);
   }
   else if(this.state.operator=="/"){     result=parseFloat(this.state.previous)/parseFloat(this.state.display);
   }
                  
   this.setState(state=>({display:result,
                 previous:"0", 
                  operator:"",
                  initiate:true,
                  isoperator:false,
                   lastclicked:"equal"
                 }) );
     }
  else{
    this.setState(state=>({display:"0",
                  previous:"0",
                  operator:"",
                   initiate:true,
                   isoperator:false,
                   lastclicked:""
                  }));
  }  
 } 

 
  
  handleChange(e){
    if(this.state.initiate==true){
       if(e.target.id=="zero" && !(this.state.display).includes("0")){
         this.setState(state=>({display:"0",
                               initiate:false,
                                lastclicked:"number"}));
       }
   else if(e.target.id=="one"){
     this.setState(state=>({display:"1",
                           initiate:false,
                           lastclicked:"number" }));
     console.log(this.state.display);
   }
   else if(e.target.id=="two"){
      this.setState(state=>({display:"2",
                            initiate:false,
                           lastclicked:"number"})); 
     console.log(this.state.display);
   } 
    else if(e.target.id=="three"){
      this.setState(state=>({display:"3",
                            initiate:false,
                            lastclicked:"number"}));
   } 
     else if(e.target.id=="four"){
      this.setState(state=>({display:"4",
                            initiate:false,
                        lastclicked:"number"    })) 
   }   
     else if(e.target.id=="five"){
      this.setState(state=>({display:"5",
                            initiate:false,
                     lastclicked:"number"       })); 
   } 
      else if(e.target.id=="six"){
      this.setState(state=>({display:"6",
                            initiate:false,
                          lastclicked:"number"  })); 
   } 
      else if(e.target.id=="seven"){
      this.setState(state=>({display:"7",
                            initiate:false,
                          lastclicked:"number"  }));
   } 
      else if(e.target.id=="eight"){
      this.setState(state=>({display:"8",
                            initiate:false,
                    lastclicked:"number"        }) );
   } 
      else if(e.target.id=="nine"){
      this.setState(state=>({display:"9",
                            initiate:false,
                          lastclicked:"number"  }) );
   } 
      else if(e.target.id=="decimal"){
      this.setState(state=>({display:".",
                            initiate:false,
                         lastclicked:"number"   })); 
   }  
     
     
      }
    
else{    
      
      if(e.target.id=="zero" ){
        this.setState(state=>({display:this.state.display +'0',
                             lastclicked:"number" }));
      }
     else if(e.target.id=="one"){
       this.setState(state=>({display:this.state.display +'1',
                            lastclicked:"number" }));
        
     }
      else if(e.target.id=="two"){
       this.setState(state=>({display: this.state.display+'2',
                            lastclicked:"number" }));
     }
       else if(e.target.id=="three"){
       this.setState(state=>({display:this.state.display+'3',
                            lastclicked:"number" }));
     }
       else if(e.target.id=="four"){
       this.setState(state=>({display: this.state.display +'4',
                           lastclicked:"number"  }));
     }
       else if(e.target.id=="five"){
       this.setState(state=>({display: this.state.display +'5',
                            lastclicked:"number" }));
     }
       else if(e.target.id=="six"){
       this.setState(state=>({display:this.state.display +'6',
                             lastclicked:"number"}));
     }
       else if(e.target.id=="seven"){
       this.setState(state=>({display:this.state.display +'7',
                            lastclicked:"number" }));
     }
       else if(e.target.id=="eight"){
       this.setState(state=>({display: this.state.display +'8',
                            lastclicked:"number" }));
     }
       else if(e.target.id=="nine"){
       this.setState(state=>({display: this.state.display +'9',
                            lastclicked:"number" }));
     }
      else if(e.target.id=="decimal" && !(this.state.display).includes(".")){
        this.setState(state=>({display: this.state.display +'.',
                             lastclicked:"decimal"}));
      }
}
  }
      
   handleOperator(e){
       if(e.target.id=="add"){
             if(!this.state.isoperator){
       this.setState(state=>({previous:this.state.display,
                       display: '0',
                       operator: e.target.textContent ,
                       isoperator:true,
                     initiate:true,
                       lastclicked:"operand"})
                     ,()=>console.log(this.state.previous));
        }
        else{
        let prev=parseFloat(this.state.previous);
          console.log(prev);
        let pres=parseFloat(this.state.display);
            console.log(pres)
        console.log(this.state.operator);
          let value=0;
        if(this.state.operator=="+"){
            
                   value=(prev+pres).toString();
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ; 
        }
         else if(this.state.operator=="-"){
                value=(prev-pres).toString(),
                 this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
         }
           else if(this.state.operator=="*"){
                  value=(prev*pres).toString();
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
           }
          else{
                  value=(prev/pres).toString(),
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
              }
                 
        }
        
      }
       
      else if(e.target.id=="subtract"){
            if(!this.state.isoperator){    
       this.setState(state=>({previous:this.state.display,
                        display: '0',
                       operator: e.target.textContent ,
                       isoperator:true,
                     initiate:true}) ,()=>console.log(this.state.previous));
                     
        }
        else{
       let prev=parseFloat(this.state.previous);
       let pres=parseFloat(this.state.display);
       let value=0
       if(this.state.operator=="+"){
            
                   value=(prev+pres).toString();
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ; 
        }
         else if(this.state.operator=="-"){
                value=(prev-pres).toString(),
                 this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
         }
           else if(this.state.operator=="*"){
                  value=(prev*pres).toString();
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
           }
          else{
                  value=(prev/pres).toString(),
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
          }
        }
       }
       
       else if(e.target.id=="divide"){
      if(!this.state.isoperator){     
       this.setState(state=>({previous:this.state.display,
                       display: '0',
                       operator: e.target.textContent ,
                       isoperator:true,
                     initiate:true}),()=>console.log(this.state.previous));
        }
       else{  
       let prev=parseFloat(this.state.previous);
       let pres=parseFloat(this.state.display);
       console.log(this.state.operator);
       let value=0;
        if(this.state.operator=="+"){
            
                   value=(prev+pres).toString();
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ; 
        }
         else if(this.state.operator=="-"){
                value=(prev-pres).toString(),
                 this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
         }
           else if(this.state.operator=="*"){
                  value=(prev*pres).toString();
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
           }
          else{
                  value=(prev/pres).toString(),
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
          }
        
       
      
       }
      }
       
   else if(e.target.id=="multiply"){
      if(!this.state.isoperator){     
       this.setState(state=>({previous:this.state.display,
                       display: '0',
                       operator: e.target.textContent ,
                       isoperator:true,
                     initiate:true}),()=>console.log(this.state.previous));
        }
       else{  
       let prev=parseFloat(this.state.previous);
       let pres=parseFloat(this.state.display);
       console.log(this.state.operator);
       let value=0;
        if(this.state.operator=="+"){
            
                   value=(prev+pres).toString();
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ; 
        }
         else if(this.state.operator=="-"){
                value=(prev-pres).toString(),
                 this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
         }
           else if(this.state.operator=="*"){
                  value=(prev*pres).toString();
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
           }
          else{
                  value=(prev/pres).toString(),
                   this.setState(state=>({previous:value,
                       display: '0',
                       operator: e.target.textContent ,
                      isoperator:true,
                      initiate:true})
                      ,()=>console.log(this.state.previous)) ;
          }
        
       
      
       }
      }     
   
     
     
     
     
     
     
     
     
     else if(e.target.id=="decimal"){
      if(!(this.state.display).includes('.'))
          this.setState(state=>({display: this.state.display+ e.target.textContent}));
        
      }
  
  
 }
  
render(){
  return(<div className="calculator">
    <Display output={this.state.display} />
    <Keys change={this.handleChange} formula={this.calculate} operand={this.handleOperator} />  
 
  </div>)
};  
};

class Display extends React.Component{
    constructor(props){
    super(props);
  }
  render(){
    return(<div id="display">
        {this.props.output}
        </div>)
  }
}


class Keys extends React.Component{
    constructor(props){
    super(props);
  }
  render(){
    return(<div>
        <button id="zero" onClick={this.props.change}>0</button>
        <button id="one" onClick={this.props.change}>1</button>
        <button id="two" onClick={this.props.change}>2</button>
        <button id="three" onClick={this.props.change}>3</button>
        <button id="four" onClick={this.props.change}>4</button>
        <button id="five"onClick={this.props.change}>5</button>
        <button id="six" onClick={this.props.change}>6</button>
        <button id="seven" onClick={this.props.change}>7</button>
        <button id="eight" onClick={this.props.change}>8</button>
        <button id="nine" onClick={this.props.change}>9</button>
        <button id="add" onClick={this.props.operand}>+</button>
        <button id="subtract" onClick={this.props.operand}>-</button>
        <button id="multiply" onClick={this.props.operand}>*</button>
        <button id="divide" onClick={this.props.operand}>/</button>
         <button id="decimal" onClick={this.props.change}>.</button>
        <button id="equals" onClick={this.props.formula}>=</button>
        <button id="clear" className="big" onClick={this.props.formula}>AC</button>
      </div>  
    )
  }
}




ReactDOM.render(<Calculator/>,document.getElementById("root"));
