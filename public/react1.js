//cách khởi tạo component. tên component chữ đầu phải là chữ

function getname(name){
    alert(name);
}


class KhoaPham extends React.Component{
    constructor(props){
        super(props);
       this.laythongtin = this.getInfo.bind(this); 

       this.state = {tonghocvien: this.props.tonghocvien};   
       this.themhocvien = this.addhocvien.bind(this);  
    }

     getInfo(){
            alert(this.props.children);
     }    
    
     addhocvien(){
        this.setState({   tonghocvien: parseInt(this.state.tonghocvien) + 1   });
     }
     

    render(){
      return    <div> 
                    <h1 className="mauvang">Khoa Hoc {this.props.ten} - {this.props.giangvien}</h1> 
                    <p>{this.props.children}</p>
                    <button onClick= {this.laythongtin} >Thông Tin</button>
                    <button onClick={ () => { getname(this.props.children) } } >Gọi Hàm Bên Ngoài</button>
                    <h2>Tổng Học viên:  {this.state.tonghocvien}.</h2>
                    <button onClick={this.themhocvien  } >Tăng Học Viên</button>
                    <KhoaHoc />      
                </div> ;   //lồng component Khoahoc vào component KhoaPham
    }
}

/*
function KhoaPham (){
    return  <h1 className="mauvang">Demo Reactjs function </h1>;    
}

*/ 

class KhoaHoc extends React.Component{
    render(){
        return <h3>Lập trình react js</h3>;
    }
}


ReactDOM.render( 
    //Cách 1: Class   //Cách 2: Function, không cần tạo element
    <div>
        <KhoaPham ten="React Js" giangvien="khoa" tonghocvien="10" >Mon Hoc React</KhoaPham>
        <KhoaPham ten="Node js" tonghocvien="20">Mon học node </KhoaPham>
    </div>  
    
, document.getElementById("react1"));


