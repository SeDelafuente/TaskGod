import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
  standalone: false
})
export class ArticlesPage implements OnInit{

  ngOnInit(): void {

  }

  constructor(private router: Router){}

  currentTopic: string = 'Productividad';
  articles = [
    {
      title: '5 Hábitos para Mejorar tu Productividad',
      content:
        'La productividad se puede mejorar implementando hábitos simples como organizar tus tareas, priorizar actividades importantes, y eliminar distracciones.',
    },
    {
      title: 'Cómo Establecer Objetivos Claros',
      content:
        'Establecer objetivos claros es clave para lograr tus metas. Usa la técnica SMART para definir objetivos específicos, medibles, alcanzables, relevantes y con un tiempo definido.',
    },
    {
      title: 'La Importancia del Descanso',
      content:
        'El descanso es fundamental para mantener un nivel alto de productividad. Aprende cómo pequeños descansos durante el día pueden mejorar tu rendimiento.',
    },
    {
      title: 'Errores Comunes al Gestionar el Tiempo',
      content:
        'Evita errores como no planificar, subestimar el tiempo necesario para completar tareas, y no priorizar las actividades importantes.',
    },
    {
      title: 'Herramientas Digitales para Ser Más Productivo',
      content:
        'Descubre herramientas digitales como Trello, Notion y Google Calendar que pueden ayudarte a organizarte y mantenerte enfocado.',
    },
  ];
  isModalOpen: boolean = false;
  selectedArticle: any = null;

  openArticle(article: any) {
    this.selectedArticle = article;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedArticle = null;
  }


  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

