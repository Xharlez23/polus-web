import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { Service } from '../../shared/models/service.model';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { ProcessCard } from '../../shared/components/process-card/process-card';
import { TechnologyCard } from '../../shared/components/technology-card/technology-card';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { TestimonialCard } from "../../shared/components/testimonial-card/testimonial-card";
// import { TestimonialCard } from '../../shared/components/testimonial-card/testimonial-card';

// ── Modelos inline (muévelos a sus archivos en models/) ──

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  avatar?: string; // opcional: iniciales o imagen
}

export interface ContactData {
  name: string;
  email: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    ServiceCard,
    FeatureCard,
    ProcessCard,
    TechnologyCard,
    ProjectCard,
    
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  /* ──────────────────────────────────────────────────
     SERVICIOS
  ────────────────────────────────────────────────── */
  services: Service[] = [
    {
      icon: 'code-2',          // usa el nombre del ícono SVG que uses (Lucide, Tabler, etc.)
      title: 'Desarrollo de Software',
      description: 'Aplicaciones web, escritorio y sistemas empresariales a la medida.'
    },
    {
      icon: 'network',
      title: 'Infraestructura',
      description: 'Redes, servidores, cableado estructurado y configuración empresarial.'
    },
    {
      icon: 'headset',
      title: 'Soporte Técnico',
      description: 'Mantenimiento preventivo, correctivo y asistencia remota 24/7.'
    },
    {
      icon: 'cloud',
      title: 'Cloud Computing',
      description: 'Migración a la nube, servidores virtuales y respaldos automáticos.'
    },
    {
      icon: 'smartphone',
      title: 'Aplicaciones Móviles',
      description: 'Apps Android e iOS desarrolladas con tecnologías modernas.'
    }
  ];

  /* ──────────────────────────────────────────────────
     FEATURES
  ─────────────────────────────────────────────────── */
  features = [
    {
      icon: 'zap',
      title: 'Respuesta rápida',
      description: 'Atendemos solicitudes y brindamos soluciones en el menor tiempo posible.'
    },
    {
      icon: 'shield',
      title: 'Seguridad',
      description: 'Protegemos tu información utilizando buenas prácticas y tecnologías modernas.'
    },
    {
      icon: 'rocket',
      title: 'Innovación',
      description: 'Siempre buscamos herramientas actuales para ofrecer mejores resultados.'
    },
    {
      icon: 'handshake',
      title: 'Acompañamiento',
      description: 'No solo entregamos el proyecto; también te acompañamos en la postventa.'
    }
  ];

  /* ──────────────────────────────────────────────────
     PROCESO
  ────────────────────────────────────────────────── */
  process = [
    { number: '1', title: 'Análisis',         description: 'Escuchamos tus necesidades y entendemos el problema.' },
    { number: '2', title: 'Planeación',        description: 'Diseñamos la arquitectura y definimos la mejor solución.' },
    { number: '3', title: 'Desarrollo',        description: 'Construimos el software utilizando tecnologías modernas.' },
    { number: '4', title: 'Implementación',    description: 'Realizamos pruebas y ponemos la solución en producción.' },
    { number: '5', title: 'Soporte',           description: 'Seguimos acompañándote después de la entrega.' }
  ];

  /* ──────────────────────────────────────────────────
     TECNOLOGÍAS
  ────────────────────────────────────────────────── */
  technologies = [
    { name: 'Angular',    image: 'assets/images/technologies/angular.svg' },
    { name: 'React',      image: 'assets/images/technologies/react_light.svg' },
    { name: 'Node.js',    image: 'assets/images/technologies/nodejs.svg' },
    { name: 'MySQL',      image: 'assets/images/technologies/mysql-icon-light.svg' },
    { name: 'PostgreSQL', image: 'assets/images/technologies/postgresql.svg' },
    { name: 'Git',        image: 'assets/images/technologies/git.svg' },
  ];

  /* ──────────────────────────────────────────────────
     PROYECTOS
  ────────────────────────────────────────────────── */
  projects = [
    {
      title: 'Sistema de Cartera',
      description: 'Sistema para administración de cobradores, clientes y pagos.',
      image: 'images/projects/cartera.jpg',
      technologies: ['Angular', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Portal Turístico',
      description: 'Plataforma para promocionar sitios turísticos y emprendimientos.',
      image: 'images/projects/turismo.jpg',
      technologies: ['Angular', 'Firebase']
    },
    {
      title: 'Sistema de Préstamos',
      description: 'Aplicación para registrar créditos, cuotas y cobradores.',
      image: 'images/projects/prestamos.jpg',
      technologies: ['Angular', 'Node', 'MySQL']
    }
  ];

  /* ──────────────────────────────────────────────────
     TESTIMONIOS ✨ nuevo
  ────────────────────────────────────────────────── */
  testimonials: Testimonial[] = [
    {
      name: 'Carlos Martínez',
      role: 'Gerente General',
      company: 'Inversiones del Norte',
      message: 'POLUS transformó completamente nuestra operación con un sistema de cartera que nos ahorra horas de trabajo cada día. El acompañamiento postventa fue excepcional.',
      rating: 5
    },
    {
      name: 'Ana Sofía Reyes',
      role: 'Directora de Turismo',
      company: 'Alcaldía Municipal',
      message: 'El portal turístico que desarrollaron superó nuestras expectativas. En semanas ya teníamos cientos de emprendedores registrados y el sistema funcionando perfecto.',
      rating: 5
    },
    {
      name: 'Luis Fernando Gómez',
      role: 'Propietario',
      company: 'Financiera Gómez',
      message: 'El sistema de préstamos redujo nuestros errores de cobranza en un 90%. El equipo de POLUS entiende el negocio y entrega soluciones reales.',
      rating: 5
    }
  ];

  /* ──────────────────────────────────────────────────
     FORMULARIO DE CONTACTO ✨ nuevo
  ────────────────────────────────────────────────── */
  contactData: ContactData = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  onSubmit(): void {
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message) return;

    console.log('Formulario enviado:', this.contactData);

    // TODO: conectar con tu backend, EmailJS, Formspree, etc.
    // Ejemplo con EmailJS:
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', this.contactData, 'PUBLIC_KEY');

    // Resetear formulario
    this.contactData = { name: '', email: '', service: '', message: '' };
    alert('¡Mensaje enviado! Te contactaremos pronto.');
  }

  scrollToContact(): void {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}