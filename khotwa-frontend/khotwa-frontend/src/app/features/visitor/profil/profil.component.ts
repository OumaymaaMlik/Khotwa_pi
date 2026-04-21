import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { TalentService } from '../../../core/services/talent.service';
import { TalentProfileEntity } from '../../../core/models/talent.model';

@Component({
  selector: 'app-visitor-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class VisitorProfilComponent implements OnInit {
  form: TalentProfileEntity = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    bio: '',
    competences: '',
    diplomes: '',
    niveauExperience: 'JUNIOR',
    cvUrl: '',
    linkedinUrl: '',
  };

  loading = false;
  loadError = '';
  saveError = '';
  success = '';

  niveaux = [
    { v: 'JUNIOR', l: 'Junior' },
    { v: 'INTERMEDIAIRE', l: 'Intermédiaire' },
    { v: 'SENIOR', l: 'Senior' },
  ];

  constructor(
    private talentService: TalentService,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    const u = this.auth.currentUser;
    if (u) {
      this.form.prenom = u.prenom ?? '';
      this.form.nom = u.nom ?? '';
      this.form.email = u.email ?? '';
    }
    const tid = u?.talentProfileId;
    if (tid != null) {
      this.loading = true;
      this.talentService.getTalentEntity(tid).subscribe({
        next: (e) => {
          this.form = { ...this.form, ...e };
          this.loading = false;
        },
        error: () => {
          this.loadError = 'Profil introuvable côté serveur. Vous pouvez en créer un nouveau (si l’API le permet).';
          this.loading = false;
        },
      });
    }
  }

  get isUpdate(): boolean {
    return this.auth.currentUser?.talentProfileId != null;
  }

  save(): void {
    if (!this.form.nom?.trim() || !this.form.prenom?.trim() || !this.form.email?.trim()) {
      this.saveError = 'Nom, prénom et email sont obligatoires.';
      return;
    }
    this.saveError = '';
    this.success = '';
    this.loading = true;

    const tid = this.auth.currentUser?.talentProfileId;
    const obs = tid != null
      ? this.talentService.modifierProfilTalent(tid, this.form)
      : this.talentService.creerProfilTalent(this.form);

    obs.subscribe({
      next: (saved) => {
        const id = saved.id ?? tid;
        if (id != null) {
          this.auth.setTalentProfileId(id);
        }
        this.loading = false;
        this.success = tid != null ? 'Profil mis à jour.' : 'Profil créé. Vous pouvez postuler aux offres.';
        setTimeout(() => this.success = '', 5000);
      },
      error: () => {
        this.loading = false;
        this.saveError = 'Erreur API (`POST/PUT /api/talents`). Vérifiez CORS et le backend.';
      },
    });
  }
}
