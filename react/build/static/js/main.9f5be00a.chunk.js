(this.webpackJsonpstylus_shop_ui=this.webpackJsonpstylus_shop_ui||[]).push([[0],{40:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(33),s=n.n(r),i=(n(40),n(3)),o=n(5),u=n(2),l=n(4),j=n.n(l),b=n(23),d=n(0),h=Object(c.createContext)(!0),O=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(0),O=Object(u.a)(j,2),p=O[0],x=O[1],f=Object(c.useState)(0),m=Object(u.a)(f,2),v=m[0],g=m[1],_=function(e){localStorage.setItem("shopping_list",JSON.stringify(e)),l(e)};return Object(c.useEffect)((function(){!function(){for(var e=0,t=0;t<o.length;t++)e+=o[t].quantity;x(e)}(),function(){for(var e=0,t=0;t<o.length;t++){var n=o[t];e+=n.price*n.quantity}g(e)}()}),[o]),Object(c.useEffect)((function(){var e=localStorage.getItem("shopping_list");e&&l(JSON.parse(e))}),[]),Object(d.jsx)(h.Provider,{value:{visible:a,set_visible:r,shopping_list:o,set_shopping_list:l,count:p,total:v,add_to_cart:function(e){var t,n=e,c=Object(b.a)(o);if(t=e.id,o.filter((function(e){return e.id===t})).length>0)for(var a=0;a<c.length;a++){var r=c[a];if(r.id===e.id){r.quantity+=1;break}}else n.quantity=1,c.push(n);_(c)},remove_from_cart:function(e){var t=o.filter((function(t){return t.id!==e}));_(t)},set_quantity:function(e,t){for(var n=Object(b.a)(o),c=0;c<n.length;c++){var a=n[c];if(a.id===e){a.quantity+t>0&&(a.quantity+=t);break}}_(n)}},children:e.children})},p=n(7),x=n.n(p),f=n(12),m=n(69),v="http://127.0.0.1:8000",g=Object(c.createContext)(!0),_=function(e){var t=Object(m.a)(),n=Object(u.a)(t,3),a=n[0],r=n[1],s=n[2],i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],b=o[1],h=Object(c.useState)({profile_url:"robert"}),O=Object(u.a)(h,2),p=O[0],_=(O[1],Object(c.useState)(null)),y=Object(u.a)(_,2),C=y[0],N=y[1],S=Object(c.useState)(""),k=Object(u.a)(S,2),E=k[0],w=k[1],T=Object(c.useState)(""),A=Object(u.a)(T,2),P=A[0],R=A[1],F=Object(c.useState)(""),I=Object(u.a)(F,2),q=I[0],U=I[1],L=Object(c.useState)(""),D=Object(u.a)(L,2),Y=D[0],B=D[1],W=Object(c.useState)(""),J=Object(u.a)(W,2),M=J[0],z=J[1],K=Object(c.useState)(""),G=Object(u.a)(K,2),H=G[0],Q=G[1],$=Object(c.useState)(""),V=Object(u.a)($,2),X=V[0],Z=V[1],ee=Object(c.useState)(""),te=Object(u.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(""),re=Object(u.a)(ae,2),se=re[0],ie=re[1],oe=Object(c.useState)(null),ue=Object(u.a)(oe,2),le=ue[0],je=ue[1],be=function(){a.token&&(b(!0),N(a.token))},de=function(){var e=Object(f.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"post",url:"".concat(v,"/auth/login/"),data:{email:t,password:n}}).then((function(e){N(e.data.key),r("token",e.data.key,{path:"/",sameSite:"strict",maxAge:86400})})).catch((function(e){console.log(e.response.status)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),he=function(){var e=Object(f.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j()({method:"post",url:"".concat(v,"/auth/registration/"),data:{email:t,password1:n,password2:n}});case 3:return c=e.sent,e.abrupt("return",201===c.status);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"post",url:"".concat(v,"/auth/logout/"),headers:{authorization:"token ".concat(C)}}).then((function(e){s("token",{path:"/"}),b(!1),N(null)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"patch",url:"".concat(v,"/api/users/profile/"),headers:{authorization:"token ".concat(C)},data:{first_name:P,last_name:q,company:Y,address:M,apartment:H,city:X,post_code:ne,phone:se}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){be()})),Object(c.useEffect)((function(){l&&j()({method:"get",url:"".concat(v,"/api/users/profile/"),headers:{authorization:"token ".concat(C)}}).then((function(e){var t=e.data.profile;je(e.data.user_id),w(e.data.email),R(t.first_name),U(t.last_name),B(t.company),z(t.address),Q(t.apartment),Z(t.city),ce(t.post_code),ie(t.phone)}))}),[l]),Object(d.jsx)(g.Provider,{value:{log_in_user:de,logged_in:l,token:C,user_data:p,check_token:be,log_out_user:Oe,register_user:he,user_id:le,email:E,set_email:w,first_name:P,set_first_name:R,last_name:q,set_last_name:U,company:Y,set_company:B,address:M,set_address:z,apartment:H,set_apartment:Q,city:X,set_city:Z,post_code:ne,set_post_code:ce,phone:se,set_phone:ie,update_profile:pe},children:e.children})},y="http://127.0.0.1:8000";function C(e){return Object(d.jsx)("input",{type:"text",placeholder:"Search all products..."})}function N(e){var t=Object(c.useContext)(h),n=t.set_visible,a=t.count;return Object(d.jsxs)("button",{onClick:function(){return n(!0)},children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"})," CART",a>0&&Object(d.jsx)("div",{className:"item-counter",children:a})]})}function S(e){var t=e.title,n=e.items;return Object(d.jsxs)("div",{className:"menu-item",children:[Object(d.jsxs)(i.b,{to:"/categories/".concat(t),children:[t.toUpperCase(),n&&Object(d.jsx)("i",{className:"fas fa-caret-down"})]}),n&&Object(d.jsx)("div",{className:"popup-menu",children:n.map((function(e){return Object(d.jsx)(i.b,{to:"/categories/".concat(t,"/").concat(e),className:"menu-item",children:e},e)}))})]})}function k(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){j()({method:"get",url:"".concat(y,"/api/shop/categories/")}).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsx)("div",{className:"menu-container",children:a.map((function(e){return Object(d.jsx)(S,{title:e.title,items:e.items},e.id)}))})}var E=function(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useContext)(g),o=s.logged_in,l=s.user_data,b=s.log_out_user;return Object(c.useEffect)((function(){j()({method:"get",url:"".concat(y,"/api/common/siteinfo/")}).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsx)("div",{className:"navbar-container",children:Object(d.jsxs)("div",{className:"content",children:[o?Object(d.jsxs)("div",{className:"sign-in-container",children:[Object(d.jsx)(i.b,{to:"/profiles/".concat(l.profile_url),children:Object(d.jsx)("i",{className:"fas fa-user"})}),Object(d.jsx)("button",{onClick:b,children:"Log Out"})]}):Object(d.jsxs)("small",{className:"sign-in-container",children:[Object(d.jsx)(i.b,{to:"/login",children:"Sign"})," in or ",Object(d.jsx)(i.b,{to:"/registration",children:"Create an Account"})]}),Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("h1",{children:a.name})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{}),Object(d.jsx)(N,{})]})]}),Object(d.jsx)(k,{})]})})};function w(){return Object(d.jsxs)("div",{className:"signup-container",children:[Object(d.jsx)("input",{type:"text",placeholder:"Email"}),Object(d.jsx)("button",{children:"SIGN UP"})]})}var T=function(e){return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"footer-block",children:[Object(d.jsx)("h4",{children:"QUICK LINKS"}),Object(d.jsx)("small",{children:"Search"}),Object(d.jsx)("small",{children:"Contact"}),Object(d.jsx)("small",{children:"About Us"}),Object(d.jsx)("small",{children:"News"}),Object(d.jsx)("small",{children:"FAQ"})]}),Object(d.jsxs)("div",{className:"footer-block",children:[Object(d.jsx)("h4",{children:"GET IN TOUCH"}),Object(d.jsx)("p",{children:"Sign up to stay in the loop. Receive updates, access to exclusive deals, and more."})]}),Object(d.jsxs)("div",{className:"footer-block",children:[Object(d.jsx)("h4",{children:"NEWSLETTER"}),Object(d.jsx)(w,{})]})]})})};var A=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(0),i=Object(u.a)(s,2),o=i[0],l=i[1],b=function(e){var t=o;(t+=e)>a.length-1?t=0:t<0&&(t=a.length-1),l(t)};return Object(c.useEffect)((function(){j()({method:"get",url:"".concat("http://127.0.0.1:8000","/api/shop/image-slider/")}).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)("div",{className:"slider-container",children:[Object(d.jsx)("div",{className:"image-container",children:a.map((function(e,t){return Object(d.jsx)("img",{className:"slider-image ".concat(o===t?"active":""),src:e.image,alt:""},e.image)}))}),Object(d.jsxs)("div",{className:"step-button-container",children:[Object(d.jsx)("i",{className:"fas fa-chevron-left",onClick:function(){return b(-1)}}),Object(d.jsx)("i",{className:"fas fa-chevron-right",onClick:function(){return b(1)}})]}),Object(d.jsx)("div",{className:"step-circles-container",children:a.map((function(e,t){return Object(d.jsx)("i",{className:"fas fa-circle ".concat(o===t?"active":""),onClick:function(){return l(t)}},e.image)}))})]})};function P(e){var t=e.data;return Object(d.jsxs)(i.b,{to:"/categories/".concat(t.title),className:"card",children:[Object(d.jsx)("img",{src:t.image,alt:""}),t.title]})}var R=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){j()({method:"get",url:"".concat("http://127.0.0.1:8000","/api/shop/categories/")}).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)("div",{className:"home-collection-container",children:[Object(d.jsx)("h4",{children:"Shop For"}),Object(d.jsx)("div",{className:"cards-container",children:a.map((function(e){return Object(d.jsx)(P,{data:e},e.id)}))})]})};var F=function(e){var t=e.data;return Object(d.jsxs)(i.b,{to:"/details/".concat(t.slug),className:"card item-card",children:[Object(d.jsx)("img",{src:t.image,alt:""}),Object(d.jsx)("small",{children:t.title}),Object(d.jsx)("div",{className:"price",children:t.price})]})};var I=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){j()({method:"get",url:"".concat("http://127.0.0.1:8000","/api/shop/featured-cameras/")}).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)("div",{className:"home-collection-container",children:[Object(d.jsx)("h4",{children:"Featured"}),Object(d.jsx)("div",{className:"cards-container",children:a.map((function(e){return Object(d.jsx)(F,{data:e},e.id)}))})]})};var q=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){j()({method:"get",url:"".concat("http://127.0.0.1:8000","/api/shop/analog-cameras/")}).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)("div",{className:"home-collection-container",children:[Object(d.jsx)("h4",{children:"Analog Cameras"}),Object(d.jsx)("div",{className:"cards-container",children:a.map((function(e){return Object(d.jsx)(F,{data:e},e.id)}))})]})};var U=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(A,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(R,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(I,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(q,{})]})};n(66);function L(e){var t=e.data;return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:t.image,alt:""})})}function D(e){var t=e.item_data,n=Object(c.useContext)(h).add_to_cart;return Object(d.jsxs)("div",{className:"buttons-layout",children:[Object(d.jsxs)("button",{className:"inverted",onClick:function(){return n(t)},children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"})," ADD TO CART"]}),Object(d.jsx)(i.b,{to:"/checkout",children:Object(d.jsx)("button",{onClick:function(){return n(t)},children:"BUY IT NOW"})})]})}var Y=function(e){var t=Object(o.h)().slug,n=Object(c.useState)({}),a=Object(u.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){j()({method:"get",url:"".concat("http://127.0.0.1:8000","/api/shop/shop-items/").concat(t)}).then((function(e){return s(e.data)}))}),[]),Object(d.jsxs)("div",{className:"details-container",children:[Object(d.jsx)(L,{data:r}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"item-title",children:r.title}),Object(d.jsx)("h4",{className:"price",children:r.price}),Object(d.jsx)("hr",{}),Object(d.jsx)(D,{item_data:r}),Object(d.jsx)("hr",{}),Object(d.jsx)("p",{children:r.description})]})]})};var B=function(e){var t=Object(o.h)().category,n=Object(o.h)().subcategory,a=Object(c.useState)([]),r=Object(u.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){j()({method:"get",url:"".concat("http://127.0.0.1:8000","/api/shop/shop-items/")}).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsx)("div",{className:"item-list-container",children:Object(d.jsx)("div",{className:"item-grid",children:s.filter((function(e){return n?e.category===t&&e.subcategory===n:e.category===t})).map((function(e){return Object(d.jsx)(F,{data:e},e.id)}))})})};function W(e){var t=e.quantity,n=e.itemID,a=Object(c.useContext)(h).set_quantity;return Object(d.jsxs)("div",{className:"quantity-container",children:[Object(d.jsx)("i",{className:"far fa-minus-square",onClick:function(){return a(n,-1)}}),Object(d.jsx)("div",{className:"quantity",children:t}),Object(d.jsx)("i",{className:"far fa-plus-square",onClick:function(){return a(n,1)}})]})}var J=function(e){var t=e.data,n=Object(c.useContext)(h).remove_from_cart;return Object(d.jsxs)("div",{className:"cart-item-container",children:[Object(d.jsx)("img",{src:t.image,alt:""}),Object(d.jsx)("small",{children:t.title}),Object(d.jsx)(W,{quantity:t.quantity,itemID:t.id}),Object(d.jsx)("h4",{children:t.price}),Object(d.jsx)("i",{className:"far fa-times-circle close-icon",onClick:function(){return n(t.id)}})]})};var M=function(e){var t,n=Object(o.g)(),a=Object(c.useContext)(h),r=a.count,s=a.shopping_list,l=a.total,b=Object(c.useContext)(g),O=b.first_name,p=b.set_first_name,m=b.last_name,v=b.set_last_name,_=b.company,y=b.set_company,C=b.address,N=b.set_address,S=b.apartment,k=b.set_apartment,E=b.city,w=b.set_city,T=b.post_code,A=b.set_post_code,P=b.phone,R=b.set_phone,F=b.logged_in,I=b.email,q=b.set_email,U=b.user_id,L=Object(c.useState)(null),D=Object(u.a)(L,2),Y=D[0],B=D[1],W=function(e){B(e),setTimeout((function(){B(null)}),5e3)},M=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B(null),I?O?m?C?E?T?P||(W("Phone name must be filled"),0):(W("Post code must be filled"),0):(W("City must be filled"),0):(W("Address must be filled"),0):(W("Last name must be filled"),0):(W("First name must be filled"),0):(W("Email must be filled"),0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,j()({method:"post",url:"".concat("http://127.0.0.1:8000","/api/shop/order/"),data:{payment_id:12345,amount:100*l,shopping_list:s,customer:{user_id:U,email:I,first_name:O,last_name:m,company:_,address:C,apartment:S,city:E,post_code:T,phone:P}}});case 4:"succeeded"===e.sent.data.status&&n.push("/payment_success");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"checkout-container",children:[Object(d.jsxs)("div",{className:"personal-data-container",children:[Object(d.jsx)("h2",{children:"Contact information"}),Object(d.jsx)("hr",{}),!F&&Object(d.jsxs)("small",{children:["Already have an account? ",Object(d.jsx)(i.b,{to:"/login",children:"Log in"})]}),Object(d.jsx)("input",{type:"email",placeholder:"Email",value:I,onChange:function(e){return q(e.target.value)}}),Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Shipping Address"}),Object(d.jsxs)("div",{className:"name-container",children:[Object(d.jsx)("input",{type:"text",placeholder:"Fist name",value:O,onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Last name",value:m,onChange:function(e){return v(e.target.value)}})]}),Object(d.jsx)("input",{type:"text",placeholder:"Company (optional)",value:_,onChange:function(e){return y(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Address",value:C,onChange:function(e){return N(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Apartment, suite, etc. (optional)",value:S,onChange:function(e){return k(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"City",value:E,onChange:function(e){return w(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Post code",value:T,onChange:function(e){return A(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Phone",value:P,onChange:function(e){return R(e.target.value)}})]}),Object(d.jsx)("div",{className:"shopping-cart-container",children:r>0?Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("h2",{children:"Your Cart"}),Object(d.jsx)("hr",{}),s.map((function(e){return Object(d.jsx)(J,{data:e},e.id)})),Object(d.jsx)("hr",{}),Object(d.jsxs)("h2",{className:"subtotal",children:["Subtotal: $",(t=l,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"card-data-container",children:[Object(d.jsx)("i",{className:"far fa-credit-card"})," Card Fielrs..."]}),Y&&Object(d.jsx)("div",{className:"checkout-error",children:Y}),Object(d.jsxs)("button",{onClick:M,children:[Object(d.jsx)("i",{className:"far fa-credit-card"})," Check Out"]})]}):Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("h2",{children:"YOUR CART IS CURRENTLY EMPTY."}),Object(d.jsxs)("small",{children:["Continue browsing ",Object(d.jsx)(i.b,{to:"/",children:"here."})]})]})})]})};var z=function(e){var t=Object(c.useContext)(g),n=t.log_in_user,a=t.user_data,r=Object(c.useState)(""),s=Object(u.a)(r,2),l=s[0],j=s[1],b=Object(c.useState)(""),h=Object(u.a)(b,2),O=h[0],p=h[1],m=Object(o.g)(),v=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l||O){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,n(l,O);case 5:m.push("/profiles/".concat(a.profile_url));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){0}),[]),Object(d.jsx)("div",{className:"center-page-container",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("h1",{children:"Sign In"}),Object(d.jsx)("input",{type:"email",placeholder:"Email",value:l,onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"Password",value:O,onChange:function(e){return p(e.target.value)}}),Object(d.jsx)(i.b,{to:"/password-reset",children:Object(d.jsx)("small",{children:"Forgot your password?"})}),Object(d.jsx)("button",{onClick:v,children:"Sign In"}),Object(d.jsxs)("small",{children:["or ",Object(d.jsx)(i.b,{to:"/",children:"Return to store"})]})]})})};var K=function(e){var t=Object(c.useContext)(g).register_user,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],s=a[1],l=Object(c.useState)(""),j=Object(u.a)(l,2),b=j[0],h=j[1],O=Object(c.useState)(""),p=Object(u.a)(O,2),m=p[0],v=p[1],_=Object(c.useState)(null),y=Object(u.a)(_,2),C=y[0],N=y[1],S=Object(c.useState)(!1),k=Object(u.a)(S,2),E=k[0],w=k[1],T=Object(o.g)(),A=function(){var e=Object(f.a)(x.a.mark((function e(n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),N(null),0!==r.length){e.next=5;break}return N("Email is invalid"),e.abrupt("return");case 5:if(0!==b.length){e.next=8;break}return N("Password is invalid"),e.abrupt("return");case 8:if(b===m){e.next=11;break}return N("Passwords not match."),e.abrupt("return");case 11:return w(!0),e.next=14,t(r,b);case 14:if(c=e.sent,w(!1),c){e.next=19;break}return N("This user already registered"),e.abrupt("return");case 19:T.push("/registration-email-sent");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"center-page-container",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("h1",{children:"CREATE ACCOUNT"}),Object(d.jsx)("input",{type:"email",placeholder:"Email",value:r,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"Password",value:b,onChange:function(e){return h(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"Confirm your password",value:m,onChange:function(e){return v(e.target.value)}}),C&&Object(d.jsx)("div",{className:"error",children:C}),E?Object(d.jsx)("div",{children:"Waiting..."}):Object(d.jsx)("button",{onClick:A,children:"CREATE"}),Object(d.jsxs)("small",{children:["or ",Object(d.jsx)(i.b,{to:"/",children:"Return to store"})]})]})})};var G=function(e){return Object(d.jsx)("div",{className:"center-page-container",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("h1",{children:"RESET YOUR PASSWORD"}),Object(d.jsx)("small",{children:"We will send you an email to reset your password."}),Object(d.jsx)("input",{type:"email",placeholder:"Email"}),Object(d.jsx)("button",{children:"SUBMIT"}),Object(d.jsxs)("small",{children:["or ",Object(d.jsx)(i.b,{to:"/",children:"Return to store"})]})]})})};var H=function(e){var t,n=Object(c.useContext)(h),a=n.visible,r=n.set_visible,s=n.count,o=n.shopping_list,u=n.total;return a?Object(d.jsx)("div",{className:"cart-container",onClick:function(){return r(!1)},children:Object(d.jsx)("div",{className:"card",onClick:function(e){return e.stopPropagation()},children:s>0?Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("h2",{children:"Shopping Cart"}),Object(d.jsx)("hr",{}),o.map((function(e){return Object(d.jsx)(J,{data:e},e.id)})),Object(d.jsx)("hr",{}),Object(d.jsxs)("h2",{className:"subtotal",children:["Subtotal: $",(t=u,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),Object(d.jsx)(i.b,{to:"/checkout",children:Object(d.jsxs)("button",{onClick:function(){return r(!1)},children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"})," CHECK OUT"]})})]}):Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("h2",{children:"YOUR CART IS CURRENTLY EMPTY."}),Object(d.jsxs)("small",{children:["Continue browsing ",Object(d.jsx)(i.b,{to:"/",onClick:function(){return r(!1)},children:"here."})]})]})})}):null};var Q=function(e){var t=Object(c.useContext)(g),n=t.first_name,a=t.set_first_name,r=t.last_name,s=t.set_last_name,i=t.company,o=t.set_company,u=t.address,l=t.set_address,j=t.apartment,b=t.set_apartment,h=t.city,O=t.set_city,p=t.post_code,x=t.set_post_code,f=t.phone,m=t.set_phone,v=t.update_profile;return Object(d.jsx)("div",{className:"center-page-container",children:Object(d.jsxs)("div",{className:"profile-container",children:[Object(d.jsx)("h2",{children:"Profile"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"name-container",children:[Object(d.jsx)("input",{type:"text",placeholder:"First name",value:n,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Last name",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsx)("input",{type:"text",placeholder:"Company",value:i,onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Address",value:u,onChange:function(e){return l(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Apartment, suite, etc. (Optional)",value:j,onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"City",value:h,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Post code",value:p,onChange:function(e){return x(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Phone",value:f,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("hr",{}),Object(d.jsx)("button",{onClick:v,children:"UPDATE"})]})})},$=n(18),V=n(35);var X=function(e){var t=e.component,n=Object(V.a)(e,["component"]),a=Object(c.useContext)(g),r=a.logged_in,s=a.check_token,i=Object(c.useState)(!0),l=Object(u.a)(i,2),j=l[0],b=l[1];return Object(c.useEffect)((function(){s(),b(!1)}),[]),j?null:Object(d.jsx)(o.b,Object($.a)(Object($.a)({},n),{},{render:function(e){return r?Object(d.jsx)(t,Object($.a)({},e)):Object(d.jsx)(o.a,{to:"/login"})}}))};var Z=function(e){return Object(d.jsx)("div",{className:"center-page-container",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Thank you for your registration"}),Object(d.jsx)("p",{children:"We sent a confirmation link to your email address."})]})})};var ee=function(e){return Object(d.jsx)("div",{className:"center-page-container",children:Object(d.jsx)("h1",{children:"Thank you for your order"})})};var te=function(){return Object(d.jsx)(i.a,{children:Object(d.jsx)(_,{children:Object(d.jsx)(O,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(H,{}),Object(d.jsxs)("div",{children:[Object(d.jsx)(E,{}),Object(d.jsx)("div",{className:"content-container",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/categories/:category/:subcategory?",component:B}),Object(d.jsx)(o.b,{path:"/details/:slug",component:Y}),Object(d.jsx)(o.b,{path:"/checkout",component:M}),Object(d.jsx)(o.b,{path:"/payment_success",component:ee}),Object(d.jsx)(o.b,{path:"/login",component:z}),Object(d.jsx)(o.b,{path:"/registration",component:K}),Object(d.jsx)(o.b,{path:"/registration-email-sent",component:Z}),Object(d.jsx)(o.b,{path:"/password-reset",component:G}),Object(d.jsx)(X,{path:"/profiles/:profile_url",component:Q}),Object(d.jsx)(o.b,{path:"/",component:U})]})})]}),Object(d.jsx)(T,{})]})})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(te,{})}),document.getElementById("root")),ne()}},[[67,1,2]]]);
//# sourceMappingURL=main.9f5be00a.chunk.js.map