import React,{Component} from 'react'

class componantone extends Component {
    state = {name:''  }
    render() { 
        return ( 

            <div>
                
                    <input type='text' id = 'inp' onKeyUp={this.name}/>
                    <p style={{border:'3px solid',width:'500px',height:'50px',margin:'50px'}}>
                        {this.state.name}
                    </p>
                    <p style={{border:'3px solid',width:'500px',height:'50px',margin:'50px'}}>
                        {this.state.name}
                    </p>
                    <p style={{border:'3px solid',width:'500px',height:'50px',margin:'50px'}}>
                      Mohammad Albittar
                    </p>
            </div>
         );
    }

    name=()=>
    {
        this.setState({name:this.state.name=document.getElementById('inp').value})
    }
}
 
export default componantone;