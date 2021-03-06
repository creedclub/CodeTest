let Btn = React.createClass({
    // getInitialState 这个方法是用来初化this.state的值的，它的返回值最终会被赋值给this.state
    getInitialState(){
        return {
            name:'小明',
            age:20
        }
    },
    // componentWillMount 表示组件即将载入到页面
    componentWillMount(){
        this.setState({
          name:'WillMount'
        })
        console.log('我很开心，我要出来了!!!');
    }, 
    // render方法是用来渲染组件的,这个方法执行完成后，当前组件就已经被渲染到页面上了。
    render(){
        return (
          <div>
            <button id="btn" ref="mybtn">我是{this.state.name},今年{this.state.age}岁了</button>
          </div>
      );
    },
    // componentDidMount表示当前组件已经渲染完成,表示当前dom结构生成
    componentDidMount(){
        console.log('我很开心，我已经出来！！！');
        this.setState({
          name:'DidMount'
        })
    },
    // componentWillUpdate如果在组件【渲染完成之后】改变数据就会调用该方法
    componentWillUpdate(){
        console.log('我要变身了!!!');
        console.log(this.state.name);
    },
    // componentDidUpdate当数据更新完成之后执行该方法
      componentDidUpdate:function(){

        console.log('我已经变身了!!');
        console.log(this.state.name);
      }
});

ReactDOM.render(
    <Btn />,
    document.getElementById('box')
);