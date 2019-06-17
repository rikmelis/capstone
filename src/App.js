import React from 'react';
import {Download} from 'styled-icons/boxicons-regular';
import MainFindingsPdf from './main-findings.pdf';
import MethodologyPdf from './methodology.pdf';
import './App.scss';

function App() {
  return (
    <div className={'container'}>
      <div className='title'>Analysing Human Trafficking</div>
      <div className={'page'}>
        <div className={'block'}>
          Human trafficking affects all regions worldwide and is part of a rapidly growing business of international crime. For prevention and protection in human trafficking, an in-depth understanding of victim characteristics is essential. The aim of "Analysing Human Trafficking" was to create a typology of human trafficking cases by applying machine learning techniques to individual data provided by the International Organization for Migration (IOM). Detailed information on our main findings as well as our methodological approach can be found in the two reports below.
        </div>
        <h3>The Reports</h3>
        <div className={'block with-image main-findings-report'}>
          <div className={'subtitle'}>Main Findings Report</div>
          <div className='text'>
            Our analysis supports some conventional theoretical assumptions regarding factors closely linked to trafficking victims such as age, gender, origin, and individual’s economic status. However, it reveals intricate patterns with regard to how victim characteristics, their entry into the trafficking process, as well as type of exploitation interact together across regions. Accordingly, our results emphasise that the victim’s marital status, the activity a victim believes to be undertaken in the destination country, and the victim’s initial contact to the recruiter are essential factors in determining the type of exploitation of the victims.
          </div>
        </div>
        <a className={'download-button'} href={MainFindingsPdf} target='_blank' rel='noopener noreferrer'>
          <Download/>
          Download Main Findings Report
        </a>
        <div className={'block with-image methodology-report'}>
          <div className={'subtitle'}>Methodology Report</div>
          <div className='text'>
            The scope of this report is to elucidate the innovative methodological approaches used in the project. The reader can follow our analysis in depth from the data preparation up to statistical methods. Significant weight has been given to machine learning techniques – clustering analysis and classification tree analysis. The great advantage of these types of techniques is that they presuppose a certain degree of inductive reasoning. This allowed us to detect characteristics of victims less influenced by pre-defined theoretical assumptions. Moreover, the report covers some problems that emerged during the analysis regarding the data coding, revealing some potential for improvement of data collection.
          </div>
        </div>
        <a className={'download-button'} href={MethodologyPdf} target='_blank' rel='noopener noreferrer'>
          <Download/>
          Download Methodology Report
        </a>
        <h3>The Project</h3>
        <div className={'block'}>
          "Analysing Human Trafficking - A Machine Learning Approach" is a joint project between the International Organization for Migration (IOM) and the University of Zurich (UZH). It aimed to create a typology of human trafficking cases . The project was carried out by Master students within a Capstone Course, offered by the University of Zurich. Capstone Courses are innovative teaching formats, which provide the students with the opportunity to develop their skills and apply them to practical problems. More information on Capstone Courses is available <a href="https://www.ipz.uzh.ch/en/studium/MA/capstones.html" target='_blank' rel='noopener noreferrer'>here</a>.
        </div>
        <h3>The Team</h3>
        <div className={'block'}>
          The team behind "Analysing Human Trafficking - A Machine Learning Approach" consists of five Master students at the University of Zurich: Janine Albiez, Patrik Aus der Au, Saro Gibilisco, Théoda Woeffray, and Jenny Yin. The project was realised under the supervision and with the valuable support of Prof. Dr. Marco Steenbergen and Dr. Judith Spirig.
        </div>
        <h3>Get in touch!</h3>
        <div className={'block'}>
          If you have questions or suggestions concerning our project, feel free to contact us!
        </div>
      </div>
    </div>
  );
}

export default App;

