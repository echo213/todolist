// pages/todo/todo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'abcfhgfgfhffhgfhgfhgfhgfhgfsdd',
    inputValue:'',
    todolist:[],
    debug:true
  },
  onLoad: function(){
    this.setData({
      todolist: (wx.getStorageSync('todos') || [])
    })
  },
  bindKeyblur: function (e) {
    var objTodo = new Object();
    objTodo.text = e.detail.value;
    objTodo.checked = false;
    objTodo.id = this.data.todolist.length;
    objTodo.textStyle = 'text';
    objTodo.available=true;
    console.log('length - 1 = ', this.data.todolist.length - 1)
    if (objTodo.text && objTodo.text!="") {
      if (this.data.todolist.length == 0) {
        this.data.todolist[this.data.todolist.length] = objTodo;
        this.setData({
          todolist: this.data.todolist,
          inputValue: this.data.inputValue
        });
        }
      if (this.data.todolist[this.data.todolist.length - 1].text != objTodo.text) {
          this.data.todolist[this.data.todolist.length] = objTodo;
          this.setData({
            todolist: this.data.todolist,
            inputValue: this.data.inputValue,
            
          });
        }
      
    }

    // TODOLIST数据写入本地
    //var todos = wx.getStorageSync('todolist') || []
    //todos.unshitf(todo.data.todolist)
    wx.setStorageSync('todos',this.data.todolist)
    console.log('lenght_1=' + e.detail.value);
    console.log('e',e);
    console.log('inputvalue=',this.data.inputValue);
    },
  inputviewtap: function (e) {
    console.log('eaaa', e);
    this.setData({
      value: this.data.inputValue
    });
    console.log('ebbb', e);
  },
  bindViewTap: function (event) {
    console.log("event=" , event);
    console.log(event);
    if (this.data.todolist[event.target.id].checked) {
      this.data.todolist[event.target.id].checked = false;
      this.data.todolist[event.target.id].textStyle = 'text';
      //this.data.textStyle = 'text';
      this.setData({
        todolist:this.data.todolist
      })
    }
    else
    {
      this.data.todolist[event.target.id].checked = true;
      this.data.todolist[event.target.id].textStyle = 'textDel';
      //this.data.textStyle = 'textDel';
      this.setData({
        todolist: this.data.todolist
      })
    }
    wx.setStorageSync('todos', this.data.todolist)
  },
  touchmovedel:function (event){
    console.log(event);
    var t='sss';
    this.setData({
      value:t
    })
  },
  clear:function(event){
    console.log(event)
    this.data.todolist[event.target.id].available=false; 
      this.setData({
        todolist:this.data.todolist
      })
    wx.setStorageSync('todos', this.data.todolist)
  },
  logs: function(e){
   if (this.data.debug) {
    console.log("type is:", typeof this.todolist_1)
    console.log("todolist:",this.data.todolist)
    console.log("debug:",this.data.debug)
    console.log("userInfo:",app.globalData.userInfo)


    var l = this.data.todolist.length;
    console.log('length=' + l);
    console.log('todolist=' + this.data.todolist);
    console.log('input=', this.data.inputValue);
  }
  }
})