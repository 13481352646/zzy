import{i as p,_ as y,d as C,r as N,o as E,c as F,a as f,b as l,w as a,F as L,e as i,t as D}from"./index-2b228d4a.js";import{c as U,E as m,a as $,b as v,d as M}from"./el-table-column-37b5773d.js";import{a as T,b as W,E as B,c as _}from"./el-button-b0706634.js";function j(){return p({url:"/api/student/all",method:"get"})}function A(e){return p({url:`/api/student/delete?id=${e}`,method:"get"})}function H(e){return p({url:"/api/student/add",method:"post",data:e})}function O(e){return p({url:"/api/student/edit",method:"post",data:e})}function z(e){return p({url:`/api/student/getStudentByStudentNo?studentNo=${e}`,method:"get"})}const I=C({data(){return{input:"",Students:[],dialogFormVisible:!1,Student:{id:0},searchNo:"",formLabelWidth:80}},mounted(){this.getStudentList()},methods:{research(){this.searchNo="",this.getStudentList()},search(){if(this.searchNo==""){alert("请输入学生学号后进行查询");return}z(this.searchNo).then(e=>{console.log(e),this.Students=[],this.Students.push(e.data.student),console.log(this.Students)}).catch(e=>{console.log(e)})},toEdit(e){this.dialogFormVisible=!0,this.Student=U(e)},transformTimestamp(e){let t=new Date(e).getTime();const n=new Date(t),g=n.getFullYear()+"-",b=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",c=(n.getDate()<10?"0"+n.getDate():n.getDate())+"  ",h=(n.getHours()<10?"0"+n.getHours():n.getHours())+":",d=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes();return g+b+c+h+d},getStudentList(){j().then(e=>{console.log(e),this.Students=e.data.students,console.log(this.Students)}).catch(e=>{console.log(e)})},del(e){A(e).then(t=>{if(t.success)this.getStudentList();else return console.log(t.msg),!1}).catch(t=>{})},toAdd(){this.dialogFormVisible=!0},save(){const e=this.Student;e.id==0?H(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getStudentList(),m(t.msg);else return m(t.msg),!1}).catch(t=>{m("网络错误联系管理员")}):O(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getStudentList(),m(t.msg);else return m(t.msg),!1}).catch(t=>{m("网络错误联系管理员")})}}}),Y={style:{width:"80%",margin:"0 auto"}},q={class:"dialog-footer"};function P(e,t,n,g,b,c){const h=N("router-link"),d=T,u=W,r=B,s=M,V=$,S=_,w=v;return E(),F(L,null,[f("div",null,[f("div",Y,[l(h,{to:"/index"},{default:a(()=>[i("首页")]),_:1}),l(u,{label:"学生","label-width":80,style:{display:"inline-flex","margin-right":"10px"}},{default:a(()=>[l(d,{modelValue:e.searchNo,"onUpdate:modelValue":t[0]||(t[0]=o=>e.searchNo=o),placeholder:"请输入学生学号"},null,8,["modelValue"])]),_:1}),l(r,{type:"primary",onClick:e.search},{default:a(()=>[i("查询")]),_:1},8,["onClick"]),l(r,{type:"warning",onClick:e.research},{default:a(()=>[i("重置")]),_:1},8,["onClick"]),l(r,{type:"success",onClick:e.toAdd},{default:a(()=>[i("添加")]),_:1},8,["onClick"])]),l(V,{data:e.Students,style:{width:"80%",margin:"0 auto"}},{default:a(()=>[l(s,{fixed:"",prop:"id",label:"序号",width:"50"}),l(s,{prop:"studentNo",label:"	学号",width:"120"}),l(s,{prop:"studentName",label:"姓名",width:"120"}),l(s,{prop:"school",label:"学校",width:"120"}),l(s,{prop:"major",label:"专业",width:"120"}),l(s,{prop:"depart",label:"部门",width:"120"}),l(s,{prop:"major",label:"专业",width:"120"}),l(s,{prop:"classinfo",label:"班级",width:"120"}),l(s,{label:"创建时间",width:"200"},{default:a(o=>[i(D(this.transformTimestamp(o.row.createTime)),1)]),_:1}),l(s,{fixed:"right",label:"操作",width:"100"},{default:a(o=>[l(r,{link:"",type:"primary",size:"small",onClick:k=>e.toEdit(o.row)},{default:a(()=>[i("更新")]),_:2},1032,["onClick"]),l(r,{link:"",type:"primary",size:"small",onClick:k=>e.del(o.row.id)},{default:a(()=>[i("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),l(w,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[8]||(t[8]=o=>e.dialogFormVisible=o),title:"学生编辑"},{footer:a(()=>[f("span",q,[l(r,{onClick:t[7]||(t[7]=o=>e.dialogFormVisible=!1)},{default:a(()=>[i("Cancel")]),_:1}),l(r,{type:"primary",onClick:e.save},{default:a(()=>[i(" 保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(S,{model:e.Student},{default:a(()=>[l(u,{label:"学号","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.Student.studentNo,"onUpdate:modelValue":t[1]||(t[1]=o=>e.Student.studentNo=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(u,{label:"姓名","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.Student.studentName,"onUpdate:modelValue":t[2]||(t[2]=o=>e.Student.studentName=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(u,{label:"班级","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.Student.classinfo,"onUpdate:modelValue":t[3]||(t[3]=o=>e.Student.classinfo=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(u,{label:"学校","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.Student.school,"onUpdate:modelValue":t[4]||(t[4]=o=>e.Student.school=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(u,{label:"专业","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.Student.major,"onUpdate:modelValue":t[5]||(t[5]=o=>e.Student.major=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(u,{label:"部门","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.Student.depart,"onUpdate:modelValue":t[6]||(t[6]=o=>e.Student.depart=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),f("template",null,[l(d,{modelValue:e.input,"onUpdate:modelValue":t[9]||(t[9]=o=>e.input=o),placeholder:"Please input"},null,8,["modelValue"])])],64)}const Q=y(I,[["render",P]]);export{Q as default};
