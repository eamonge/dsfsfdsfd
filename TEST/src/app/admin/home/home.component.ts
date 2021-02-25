import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navigation : any;
  selected: any;

  constructor(
    private route: ActivatedRoute,
  ) { 
    /* this.route.params.subscribe(paramsId => {
      this.selected = this.navigation[paramsId.mod];
    }); */
  }

  ngOnInit(): void {
    const mod = this.route.snapshot.params.mod;
    this.navigation = [
      {
        title : 'Accounting',
        products: [
          { name: 'Contracts', icon: 'file-contract', style: 'fas', description: 'Maintaining contracts is a key to managing financial obligations' },
          { name: 'Deposits', icon: 'hands-usd', style: 'far', path: '/admin/accounting/deposits', description: 'Easily tracking deposits, deposit slips and receipts provides effective management of accounts' },
          { name: 'Ledgers', icon: 'file-chart-line', style: 'fal', path: '/admin/accounting', description: 'Ledgers are comprehensive, easy to use, share and read' },
          { name: 'Receipts', icon: 'receipt', style: 'far', description: 'Conveniently uploading receipts to a specific ledger item provides safer and less costly accounting' },
          { name: 'Statements', icon: 'file-invoice-dollar', style: 'far', description: 'Efficiently maintaining statements while keeping them accessible is a huge benefit' },
        ]
      },
           {
        title : 'Contacts',
        products: [
          { name: 'Facebook', icon: 'facebook-square', style: 'fab', description: 'Managing Facebook contacts without duplicates is a tool originally developed for Social Influencers' },
          { name: 'Gmail', icon: 'envelope-open-text', style: 'far', description: 'Managing Gmail contacts without duplicates is a tool originally developed for Social Influencers' },
          { name: 'Instagram', icon: 'instagram', style: 'fab', description: 'Managing Instagram contacts without duplicates is a tool originally developed for Social Influencers' },
          { name: 'iPhone', icon: 'mobile-alt', style: 'fas', description: 'Managing iPhone contacts without duplicates is a tool originally developed for Social Influencers' },
          { name: 'LinkedIn', icon: 'linkedin', style: 'fab', description: 'Managing LinkedIn contacts without duplicates is a tool originally developed for Social Influencers' },
          { name: 'Outlook', icon: 'envelope-open', style: 'fad', description: 'Managing Outlook contacts without duplicates is a tool originally developed for Social Influencers' },
          { name: 'Phone', icon: 'phone-office', style: 'fad', description: 'Managing Phone contacts without duplicates is a tool originally developed for Social Influencers' },
          { name: 'Twitter', icon: 'twitter-square', style: 'fab', description: 'Managing Twitter contacts without duplicates is a tool originally developed for Social Influencers' },
        ]
      },
      {
        title : 'Credentials',
        products: [
          { name: 'Accreditations', icon: 'award', style: 'far', description: 'Accreditations are occasionally required to maintain regulatory compliance' },
          { name: 'Certifications', icon: 'file-certificate', style: 'fad', description: 'Certificates are occasionally required to maintain regulatory compliance' },
          { name: 'Competencies', icon: 'certificate', style: 'fad', description: 'Competencies are occasionally required to maintain regulatory compliance' },
          { name: 'Credits', icon: 'credit-card-front', style: 'fas', description: 'Credits are occasionally required to maintain regulatory compliance' },
          { name: 'Diplomas', icon: 'diploma', style: 'far', description: 'Diplomas are occasionally required to maintain regulatory compliance' },
          { name: 'Hours', icon: 'hourglass-end', style: 'fad', description: 'Hours are occasionally required to maintain regulatory compliance' },
          { name: 'Licenses', icon: 'id-card-alt', style: 'far', path: "/admin/credentials", description: 'Licenses are occasionally required to maintain regulatory compliance' },
          { name: 'Registrations', icon: 'question', style: 'fas', description: 'Registrations are occasionally required to maintain regulatory compliance' },
          { name: 'Professional Specialties', icon: 'question', style: 'fas', description: 'Professional are occasionally required to maintain regulatory compliance' },
        ]
      },
      {
        title : 'Knowledge Base',
        products: [
          { name: 'Prior Results', icon: 'poll-people', style: 'fas', description: 'Prior results are a tremendous value in our predictive analytics and decision making tools' },
          { name: 'Comparison', icon: 'poll', style: 'fad', description: 'Comparisons are utilized with prior results to provide a reliable basis for decision making' },
        ]
      },
      {
        title : 'Marketing',
        products: [
          { name: 'Campaigns', icon: 'map-marked-alt', style: 'fas', description: 'Monitoring campaigns is a great tool for team building and monitoring progress' },
          { name: 'Property', icon: 'chart-pie', style: 'far', description: 'Property data is utilized to understand the local market assisting marketing campaigns' },
          { name: 'Tasks', icon: 'tasks', style: 'far', description: 'Task Management is a valuable tool adding efficiency to the service process' },
        ]
      },
      {
        title : 'Messaging',
        products: [
          { name: 'Emails', icon: 'envelope-square', style: 'far', description: 'Integrated emails are an efficiency and security measure businesses and their clients benefit from' },
          { name: 'Facebook', icon: 'facebook-messenger', style: 'fab', description: 'Facebook Messenger is a popular tool preferred by many' },
          { name: 'Signal', icon: 'lock-alt', style: 'fas', description: 'Signal is a preferred encryped messaging system integrated as a messaging option' },
          { name: 'Whatsapp', icon: 'whatsapp', style: 'fab', description: 'WhatsApp is a messaging system integrated as a messaging option' },
          { name: 'Notes', icon: 'sticky-note', style: 'far', description: 'The ability to take time stamped notes is always convenient' },
          { name: 'Phone', icon: 'phone-square-alt', style: 'far', description: 'Integrated phone systems provide a tremendous value to businesses' },
        ]
      },
      {
        title : 'Documents',
        products: [
          { name: 'Details', icon: 'file-upload', style: 'fad', description: 'A large amount of property data is immediately accessible allowing us to assist clients immediately' },
          { name: 'Report Builder', icon: 'file-pdf', style: 'far', path: "/admin/docs/insp-report", description: 'Generation, deliver, storage, and tracking of documents is done securely and without effort' },
          { name: 'Filings', icon: 'folders', style: 'fas', path: "/admin/docs/filings", description: 'Public record filings are a key source of property data above and beyond the average Home Inspection' },
          { name: 'Templates', icon: 'file-medical-alt', style: 'fas', description: 'Storage maintains over a decade of templates related to Home Inspection' },
          { name: 'Storage', icon: 'folder-tree', style: 'far', description: 'Our storage is encrypted in transit and at rest for your security while being easily accessible' },
          { name: 'Versions', icon: 'theater-masks', style: 'fal', description: 'In extreme cases documents can be used over the course of years.  Our versioning system protects all documentation in case of required edits' },
        ]
      },
      {
        title : 'Users',
        products: [
          { name: 'Groups', icon: 'users-class', style: 'fas', description: 'Groups are used when assembling teams with different roles in order to maintain permissions related to access and security' },
          { name: 'Logins', icon: 'clipboard-check', style: 'fas', description: 'All logins are secure with client and servant side encryption' },
          { name: 'Roles', icon: 'user-tie', style: 'fad', description: 'Roles are assisgned to authenticated users identifying access to on-line resources and benefits' },
        ]
      },
      {
        title : 'Passwords',
        products: [
          { name: 'Activity', icon: 'fingerprint', style: 'fas', description: 'Monitoring Server activity is a preventitive measure and important part of our security protocol' },
          { name: 'Analytics', icon: 'cctv', style: 'fas', description: 'Advanced analytics are utilized to provide answers without a massive human cost' },
          { name: 'Scores', icon: 'star-exclamation', style: 'far', description: 'Scores are the results of our algorithms providing us an easy way to assess performance' },
          { name: 'Time', icon: 'key-skeleton', style: 'fad', description: 'Monitoring and managing time efficiently allows superior performance' },
          { name: 'Wellness', icon: 'spa', style: 'far', description: 'Wellness is a core value and comittment for long term as well as immediate benefit' },
        ]
      },
      {
        title : 'Server',
        products: [
          { name: 'Activity', icon: 'snowboarding', style: 'fas', description: 'Monitoring Server activity is a preventitive measure and important part of our security protocol' },
          { name: 'Analytics', icon: 'analytics', style: 'fal', description: 'Advanced analytics are utilized to provide answers without a massive human cost' },
          { name: 'Scores', icon: 'star-exclamation', style: 'fas', description: 'Scores are the results of our algorithms providing us an easy way to assess performance' },
          { name: 'Time', icon: 'stopwatch', style: 'far', description: 'Monitoring and managing time efficiently allows superior performance' },
          { name: 'Wellness', icon: 'eye', style: 'far', description: 'Wellness is a core value and comittment for long term as well as immediate benefit' },

          { name: 'Users', icon: 'users-cog', style: 'fas', description: '' },
          { name: 'Passwords', icon: 'key-skeleton', style: 'fas', description: '' },
        ]
      }
    ];
    this.selected = this.navigation[mod];
  }

}
