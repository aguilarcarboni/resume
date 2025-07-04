export enum PROJECT_STATE {
  Completed = 1,
  InProgress = 2,
  NotStarted = 0,
}

import { Rocket, TrendingUp, Zap, Ticket } from 'lucide-react'

export const projects = [
    {
      'name': 'ABMODEL',
      'description': 'Won 1st place in Local Competition for NASA\'s 2023 Space Apps Challenge.',
      'content': <div>
        <p>Developed a web application visualizing Moonquake data from NASAs API using interactive 3D graphics. Key features:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Interactive 3D Moon model with accurate topography</li>
          <li>Real-time rendering of Moonquake epicenters and magnitudes</li>
          <li>Timeline slider for exploring seismic events</li>
          <li>Detailed information panels for each Moonquake event</li>
        </ul>
      </div>,
      'state': PROJECT_STATE.Completed,
      'url': 'https://abmodel-nasa.vercel.app/',
      'icon': Rocket
    },
    {
      'name': 'AGM Web Ecosystem',
      'description': 'Developed custom websites, databases and CRM dashboards for AGM Technology, a stock broking firm in Costa Rica.',
      'content': <div>
        <p>Created a comprehensive web ecosystem for AGM Technology, including:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Responsive website showcasing services and market insights</li>
          <li>Secure client portal for account management</li>
          <li>Custom CRM dashboard for internal use</li>
          <li>Real-time market data integration</li>
          <li>Compliance with financial regulations</li>
        </ul>
      </div>,
      'state': PROJECT_STATE.Completed,
      'url': 'https://agmtechnology.com/',
      'icon': TrendingUp
    },
    {
      'name': 'Spectra',
      'description': 'Developed a web app and database for the PRIAS laboratory at National Center of High Technology (CeNAT).',
      'content': <div>
        <p>Spectra: A web application for advanced spectral analysis at PRIAS laboratory. Features:</p>
        <ul className="list-disc list-inside ml-4">
          <li>User-friendly interface for spectral data analysis</li>
          <li>Advanced algorithms for signature identification</li>
          <li>Robust database for large volumes of spectral data</li>
          <li>Data visualization tools for charts and graphs</li>
          <li>Collaborative platform for researchers</li>
        </ul>
      </div>,
      'state': PROJECT_STATE.Completed,
      'url': '',
      'icon': Zap
    },
    {
      'name': 'StarTickets Website Refresh',
      'description': 'Refreshed the design for StarTickets website.',
      'content': <div>
        <p>Led a comprehensive redesign of the StarTickets website:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Implemented responsive design for mobile and desktop</li>
          <li>Streamlined ticket purchasing, reducing checkout time by 40%</li>
          <li>Integrated intelligent search and filtering system</li>
          <li>Developed personalized recommendation engine</li>
          <li>Improved site performance, increasing page load speed by 25%</li>
        </ul>
      </div>,
      'state': PROJECT_STATE.Completed,
      'url': 'https://starticket.cr/en',
      'icon': Ticket
    },
]