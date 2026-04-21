import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AdminMessagesComponent_div_12_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r2.unread);
} }
function AdminMessagesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵlistener("click", function AdminMessagesComponent_div_12_Template_div_click_0_listener() { const c_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectConv(c_r2)); });
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17)(4, "div", 18)(5, "span", 19);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 20);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 21);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, AdminMessagesComponent_div_12_span_11_Template, 2, 1, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", (ctx_r2.selectedConv == null ? null : ctx_r2.selectedConv.id) === c_r2.id);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", c_r2.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r2.initials);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(c_r2.nom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r2.time);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r2.lastMsg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", c_r2.unread > 0);
} }
function AdminMessagesComponent_ng_container_14_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 39)(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 40);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const m_r5 = ctx.$implicit;
    i0.ɵɵclassProp("mine", m_r5.mine);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("mine", m_r5.mine);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r5.text);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r5.time);
} }
function AdminMessagesComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24)(2, "div", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "p", 19);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 26);
    i0.ɵɵelement(8, "span", 27);
    i0.ɵɵtext(9, " En ligne");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 28);
    i0.ɵɵtemplate(11, AdminMessagesComponent_ng_container_14_div_11_Template, 6, 6, "div", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 30)(13, "button", 31);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(14, "svg", 32);
    i0.ɵɵelement(15, "path", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "input", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminMessagesComponent_ng_container_14_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.newMsg, $event) || (ctx_r2.newMsg = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown", function AdminMessagesComponent_ng_container_14_Template_input_keydown_16_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onMsgKey($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 35);
    i0.ɵɵlistener("click", function AdminMessagesComponent_ng_container_14_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sendMsg()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(18, "svg", 32);
    i0.ɵɵelement(19, "line", 36)(20, "polygon", 37);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background", ctx_r2.selectedConv.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.selectedConv.initials);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.selectedConv.nom);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2.selectedConv.messages);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.newMsg);
} }
function AdminMessagesComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 42);
    i0.ɵɵelement(2, "path", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Select a conversation");
    i0.ɵɵelementEnd()();
} }
export class AdminMessagesComponent {
    constructor() {
        this.conversations = [
            { id: 'c1', nom: 'Sara Trabelsi', initials: 'ST', color: '#2ABFBF', lastMsg: 'Hello, I updated the deliverables', time: '11:24', unread: 2, messages: [{ from: 'Sara', text: 'Hello! I updated the sprint deliverables', time: '11:20', mine: false }, { from: 'Moi', text: "Great, I'll check that", time: '11:22', mine: true }] },
            { id: 'c2', nom: 'Ahmed Coach', initials: 'AC', color: '#7C5CBF', lastMsg: 'Coaching session confirmed', time: '10:15', unread: 0, messages: [{ from: 'Ahmed', text: 'Coaching session confirmed for Friday 2pm', time: '10:15', mine: false }] },
            { id: 'c3', nom: 'KHOTWA Team', initials: 'KH', color: '#E8622A', lastMsg: 'Reminder: webinar tomorrow 10am', time: '09:00', unread: 1, messages: [{ from: 'KHOTWA', text: 'Reminder: webinar tomorrow at 10am', time: '09:00', mine: false }] },
        ];
        this.selectedConv = null;
        this.newMsg = '';
    }
    selectConv(c) { this.selectedConv = { ...c, unread: 0 }; c.unread = 0; }
    sendMsg() {
        if (!this.newMsg.trim() || !this.selectedConv)
            return;
        this.selectedConv.messages.push({ from: 'Moi', text: this.newMsg, time: 'maintenant', mine: true });
        this.newMsg = '';
    }
    onMsgKey(e) { if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMsg();
    } }
    static { this.ɵfac = function AdminMessagesComponent_Factory(t) { return new (t || AdminMessagesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminMessagesComponent, selectors: [["app-admin-messages"]], decls: 17, vars: 3, consts: [["emptyChat", ""], [1, "page", "animate-1"], [1, "page-header"], [1, "kh-page-title"], [1, "chat-layout", "animate-2"], [1, "conv-panel", "kh-card"], [1, "conv-search"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search\u2026"], [1, "conv-list"], ["class", "conv-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "chat-area", "kh-card"], [4, "ngIf", "ngIfElse"], [1, "conv-item", 3, "click"], [1, "conv-avatar"], [1, "conv-info"], [1, "conv-top"], [1, "conv-name"], [1, "conv-time"], [1, "conv-preview"], ["class", "unread-badge", 4, "ngIf"], [1, "unread-badge"], [1, "chat-header"], [1, "conv-avatar", 2, "width", "36px", "height", "36px", "font-size", "12px"], [1, "online-status"], [1, "dot-live", "dot-live--green"], [1, "messages-body"], ["class", "msg-wrap", 3, "mine", 4, "ngFor", "ngForOf"], [1, "chat-input"], [1, "input-icon-btn"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"], ["type", "text", "placeholder", "Write a message\u2026", 3, "ngModelChange", "keydown", "ngModel"], [1, "send-btn", 3, "click"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "msg-wrap"], [1, "msg-bubble"], [1, "msg-time"], [1, "empty-chat"], ["width", "56", "height", "56", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]], template: function AdminMessagesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
            i0.ɵɵtext(3, "Messagerie");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(7, "svg", 7);
            i0.ɵɵelement(8, "circle", 8)(9, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(10, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 11);
            i0.ɵɵtemplate(12, AdminMessagesComponent_div_12_Template, 12, 9, "div", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 13);
            i0.ɵɵtemplate(14, AdminMessagesComponent_ng_container_14_Template, 21, 6, "ng-container", 14)(15, AdminMessagesComponent_ng_template_15_Template, 5, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const emptyChat_r6 = i0.ɵɵreference(16);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngForOf", ctx.conversations);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.selectedConv)("ngIfElse", emptyChat_r6);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".page[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:24px;height:calc(100vh - var(--topbar-h) - 56px); }\n.page-header[_ngcontent-%COMP%] { flex-shrink:0; }\n.chat-layout[_ngcontent-%COMP%] { display:grid;grid-template-columns:300px 1fr;gap:16px;flex:1;overflow:hidden;min-height:0; }\n@media(max-width:768px) { .chat-layout[_ngcontent-%COMP%] { grid-template-columns:1fr; } }\n.conv-panel[_ngcontent-%COMP%] { display:flex;flex-direction:column;overflow:hidden; }\n.conv-search[_ngcontent-%COMP%] { display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border); }\n.conv-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { border:none;outline:none;font-size:13px;flex:1;font-family:inherit;color:var(--text-primary); }\n.conv-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder { color:var(--text-muted); }\n.conv-list[_ngcontent-%COMP%] { flex:1;overflow-y:auto; }\n.conv-item[_ngcontent-%COMP%] { display:flex;align-items:center;gap:11px;padding:13px 16px;cursor:pointer;transition:background 0.15s;position:relative; }\n.conv-item.active[_ngcontent-%COMP%] { background:var(--orange-light); }\n.conv-item[_ngcontent-%COMP%]:hover:not(.active) { background:rgba(0,0,0,0.03); }\n.conv-avatar[_ngcontent-%COMP%] { width:40px;height:40px;border-radius:11px;color:white;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0; }\n.conv-info[_ngcontent-%COMP%] { flex:1;min-width:0; }\n.conv-top[_ngcontent-%COMP%] { display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px; }\n.conv-name[_ngcontent-%COMP%] { font-size:13px;font-weight:700;color:var(--text-primary); }\n.conv-time[_ngcontent-%COMP%] { font-size:10px;color:var(--text-muted); }\n.conv-preview[_ngcontent-%COMP%] { font-size:12px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }\n.unread-badge[_ngcontent-%COMP%] { background:var(--orange);color:white;border-radius:50%;width:18px;height:18px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0; }\n.chat-area[_ngcontent-%COMP%] { display:flex;flex-direction:column;overflow:hidden; }\n.chat-header[_ngcontent-%COMP%] { display:flex;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid var(--border);flex-shrink:0; }\n.online-status[_ngcontent-%COMP%] { font-size:11px;color:var(--text-muted);display:flex;align-items:center;gap:5px;margin-top:2px; }\n.messages-body[_ngcontent-%COMP%] { flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:10px; }\n.msg-wrap[_ngcontent-%COMP%] { display:flex; }\n.msg-wrap.mine[_ngcontent-%COMP%] { justify-content:flex-end; }\n.msg-bubble[_ngcontent-%COMP%] { max-width:65%;padding:10px 14px;border-radius:16px;background:white;border:1px solid var(--border);position:relative; }\n.msg-bubble.mine[_ngcontent-%COMP%] { background:linear-gradient(135deg,var(--orange),#FF7A40);color:white;border:none; }\n.msg-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size:13px;line-height:1.5; }\n.msg-time[_ngcontent-%COMP%] { font-size:10px;opacity:0.55;display:block;margin-top:4px;text-align:right; }\n.chat-input[_ngcontent-%COMP%] { display:flex;align-items:center;gap:10px;padding:14px 18px;border-top:1px solid var(--border);flex-shrink:0; }\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { flex:1;border:1px solid var(--border);border-radius:10px;padding:10px 14px;font-size:13px;outline:none;font-family:inherit;background:var(--bg-app); }\n.chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus { border-color:var(--orange); }\n.input-icon-btn[_ngcontent-%COMP%] { background:none;border:none;cursor:pointer;color:var(--text-muted);padding:8px;border-radius:8px;transition:all 0.15s;display:flex; }\n.input-icon-btn[_ngcontent-%COMP%]:hover { background:var(--orange-light);color:var(--orange); }\n.send-btn[_ngcontent-%COMP%] { background:linear-gradient(135deg,var(--orange),#FF7A40);border:none;cursor:pointer;color:white;padding:10px 14px;border-radius:10px;display:flex;align-items:center;justify-content:center;transition:all 0.15s; }\n.send-btn[_ngcontent-%COMP%]:hover { transform:translateY(-1px);box-shadow:0 4px 12px rgba(232,98,42,0.4); }\n.empty-chat[_ngcontent-%COMP%] { display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);gap:12px; }\n.empty-chat[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { opacity:0.25; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminMessagesComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-messages', template: "<div class=\"page animate-1\">\n  <div class=\"page-header\"><h1 class=\"kh-page-title\">Messagerie</h1></div>\n  <div class=\"chat-layout animate-2\">\n    <div class=\"conv-panel kh-card\">\n      <div class=\"conv-search\">\n        <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.35-4.35\"/></svg>\n        <input type=\"text\" placeholder=\"Search\u2026\" />\n      </div>\n      <div class=\"conv-list\">\n        <div *ngFor=\"let c of conversations\" class=\"conv-item\" [class.active]=\"selectedConv?.id===c.id\" (click)=\"selectConv(c)\">\n          <div class=\"conv-avatar\" [style.background]=\"c.color\">{{ c.initials }}</div>\n          <div class=\"conv-info\">\n            <div class=\"conv-top\"><span class=\"conv-name\">{{ c.nom }}</span><span class=\"conv-time\">{{ c.time }}</span></div>\n            <p class=\"conv-preview\">{{ c.lastMsg }}</p>\n          </div>\n          <span *ngIf=\"c.unread > 0\" class=\"unread-badge\">{{ c.unread }}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"chat-area kh-card\">\n      <ng-container *ngIf=\"selectedConv; else emptyChat\">\n        <div class=\"chat-header\">\n          <div class=\"conv-avatar\" [style.background]=\"selectedConv.color\" style=\"width:36px;height:36px;font-size:12px\">{{ selectedConv.initials }}</div>\n          <div><p class=\"conv-name\">{{ selectedConv.nom }}</p><p class=\"online-status\"><span class=\"dot-live dot-live--green\"></span> En ligne</p></div>\n        </div>\n        <div class=\"messages-body\">\n          <div *ngFor=\"let m of selectedConv.messages\" class=\"msg-wrap\" [class.mine]=\"m.mine\">\n            <div class=\"msg-bubble\" [class.mine]=\"m.mine\">\n              <p>{{ m.text }}</p>\n              <span class=\"msg-time\">{{ m.time }}</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"chat-input\">\n          <button class=\"input-icon-btn\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"/></svg>\n          </button>\n          <input type=\"text\" placeholder=\"Write a message\u2026\" [(ngModel)]=\"newMsg\" (keydown)=\"onMsgKey($event)\" />\n          <button class=\"send-btn\" (click)=\"sendMsg()\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/><polygon points=\"22 2 15 22 11 13 2 9 22 2\"/></svg>\n          </button>\n        </div>\n      </ng-container>\n      <ng-template #emptyChat>\n        <div class=\"empty-chat\">\n          <svg width=\"56\" height=\"56\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/></svg>\n          <p>Select a conversation</p>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n", styles: [".page { display:flex;flex-direction:column;gap:24px;height:calc(100vh - var(--topbar-h) - 56px); }\n.page-header { flex-shrink:0; }\n.chat-layout { display:grid;grid-template-columns:300px 1fr;gap:16px;flex:1;overflow:hidden;min-height:0; }\n@media(max-width:768px) { .chat-layout { grid-template-columns:1fr; } }\n.conv-panel { display:flex;flex-direction:column;overflow:hidden; }\n.conv-search { display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border); }\n.conv-search input { border:none;outline:none;font-size:13px;flex:1;font-family:inherit;color:var(--text-primary); }\n.conv-search input::placeholder { color:var(--text-muted); }\n.conv-list { flex:1;overflow-y:auto; }\n.conv-item { display:flex;align-items:center;gap:11px;padding:13px 16px;cursor:pointer;transition:background 0.15s;position:relative; }\n.conv-item.active { background:var(--orange-light); }\n.conv-item:hover:not(.active) { background:rgba(0,0,0,0.03); }\n.conv-avatar { width:40px;height:40px;border-radius:11px;color:white;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0; }\n.conv-info { flex:1;min-width:0; }\n.conv-top { display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px; }\n.conv-name { font-size:13px;font-weight:700;color:var(--text-primary); }\n.conv-time { font-size:10px;color:var(--text-muted); }\n.conv-preview { font-size:12px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }\n.unread-badge { background:var(--orange);color:white;border-radius:50%;width:18px;height:18px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0; }\n.chat-area { display:flex;flex-direction:column;overflow:hidden; }\n.chat-header { display:flex;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid var(--border);flex-shrink:0; }\n.online-status { font-size:11px;color:var(--text-muted);display:flex;align-items:center;gap:5px;margin-top:2px; }\n.messages-body { flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:10px; }\n.msg-wrap { display:flex; }\n.msg-wrap.mine { justify-content:flex-end; }\n.msg-bubble { max-width:65%;padding:10px 14px;border-radius:16px;background:white;border:1px solid var(--border);position:relative; }\n.msg-bubble.mine { background:linear-gradient(135deg,var(--orange),#FF7A40);color:white;border:none; }\n.msg-bubble p { font-size:13px;line-height:1.5; }\n.msg-time { font-size:10px;opacity:0.55;display:block;margin-top:4px;text-align:right; }\n.chat-input { display:flex;align-items:center;gap:10px;padding:14px 18px;border-top:1px solid var(--border);flex-shrink:0; }\n.chat-input input { flex:1;border:1px solid var(--border);border-radius:10px;padding:10px 14px;font-size:13px;outline:none;font-family:inherit;background:var(--bg-app); }\n.chat-input input:focus { border-color:var(--orange); }\n.input-icon-btn { background:none;border:none;cursor:pointer;color:var(--text-muted);padding:8px;border-radius:8px;transition:all 0.15s;display:flex; }\n.input-icon-btn:hover { background:var(--orange-light);color:var(--orange); }\n.send-btn { background:linear-gradient(135deg,var(--orange),#FF7A40);border:none;cursor:pointer;color:white;padding:10px 14px;border-radius:10px;display:flex;align-items:center;justify-content:center;transition:all 0.15s; }\n.send-btn:hover { transform:translateY(-1px);box-shadow:0 4px 12px rgba(232,98,42,0.4); }\n.empty-chat { display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);gap:12px; }\n.empty-chat svg { opacity:0.25; }\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminMessagesComponent, { className: "AdminMessagesComponent", filePath: "app\\features\\admin\\messages\\messages.component.ts", lineNumber: 4 }); })();
//# sourceMappingURL=messages.component.js.map