import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RessourceService {
    constructor(http) {
        this.http = http;
        this.api = '/api';
    }
    // ── Headers de Sécurité ──────────────────────────────────────────
    h(userId = 1, role = 'ADMIN', plan = 'FREE') {
        return new HttpHeaders({
            'X-User-Id': String(userId),
            'X-User-Role': role,
            'X-User-Plan': plan,
        });
    }
    getApiOrigin() {
        return this.api;
    }
    // ── Ressources ──────────────────────────────────────────────────
    getRessourcesHttp(filters = {}) {
        let params = new HttpParams()
            .set('page', String(filters.page ?? 0))
            .set('size', String(filters.size ?? 50));
        if (filters.type && filters.type !== 'ALL')
            params = params.set('type', filters.type);
        if (filters.categorieId)
            params = params.set('categorieId', String(filters.categorieId));
        if (filters.search)
            params = params.set('search', filters.search);
        return this.http.get(`${this.api}/ressources`, {
            params,
            headers: this.h(filters.userId, filters.role, filters.plan ?? 'FREE')
        });
    }
    getRessourceByIdHttp(id, userId = 1, role = 'ADMIN', plan = 'FREE') {
        return this.http.get(`${this.api}/ressources/${id}`, { headers: this.h(userId, role, plan) });
    }
    createRessourceHttp(fd, adminId = 1) {
        return this.http.post(`${this.api}/ressources`, fd, {
            headers: new HttpHeaders({ 'X-User-Id': String(adminId), 'X-User-Role': 'ADMIN' })
        });
    }
    updateRessourceHttp(id, body) {
        return this.http.put(`${this.api}/ressources/${id}`, body, { headers: this.h() });
    }
    togglePublieHttp(id) {
        return this.http.patch(`${this.api}/ressources/${id}/toggle-publie`, {}, { headers: this.h() });
    }
    deleteRessourceHttp(id) {
        return this.http.delete(`${this.api}/ressources/${id}`, { headers: this.h() });
    }
    // ── Statistiques ─────────────────────────────────────────────────
    getStatsHttp(userId = 1) {
        return this.http.get(`${this.api}/ressources/stats`, { headers: this.h(userId) });
    }
    // ── Progression ──────────────────────────────────────────────────
    updateProgressionHttp(userId, ressourceId, statut, pourcentage) {
        return this.http.post(`${this.api}/progressions`, { ressourceId, statut, pourcentage }, { headers: this.h(userId) });
    }
    marquerTermineHttp(userId, ressourceId) {
        return this.http.post(`${this.api}/progressions/${ressourceId}/terminer`, {}, { headers: this.h(userId) });
    }
    saveVideoProgressionHttp(userId, ressourceId, statut, pourcentage, positionVideoSec) {
        return this.http.post(`${this.api}/progressions`, { ressourceId, statut, pourcentage, positionVideoSec }, { headers: this.h(userId) });
    }
    getMesProgressionsHttp(userId) {
        return this.http.get(`${this.api}/progressions/mes`, { headers: this.h(userId) });
    }
    // ── Catégories ───────────────────────────────────────────────────
    getCategoriesHttp() {
        return this.http.get(`${this.api}/categories`);
    }
    createCategorieHttp(body) {
        return this.http.post(`${this.api}/categories`, body, { headers: this.h() });
    }
    updateCategorieHttp(id, body) {
        return this.http.put(`${this.api}/categories/${id}`, body, { headers: this.h() });
    }
    deleteCategorieHttp(id) {
        return this.http.delete(`${this.api}/categories/${id}`, { headers: this.h() });
    }
    // ── Utilitaires ──────────────────────────────────────────────────
    downloadAsBlob(ressourceId, userId, role, plan = 'FREE') {
        return this.http.get(`${this.api}/ressources/${ressourceId}/download`, {
            headers: this.h(userId, role, plan),
            responseType: 'blob'
        });
    }
    buildFormData(form, fichier) {
        const fd = new FormData();
        Object.keys(form).forEach(key => {
            if (form[key] !== null && form[key] !== undefined) {
                fd.append(key, String(form[key]));
            }
        });
        if (fichier)
            fd.append('fichier', fichier, fichier.name);
        return fd;
    }
    static { this.ɵfac = function RessourceService_Factory(t) { return new (t || RessourceService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RessourceService, factory: RessourceService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RessourceService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=ressource.service.js.map