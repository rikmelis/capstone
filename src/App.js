import React from 'react';
import {Download as DownloadIcon} from 'styled-icons/boxicons-regular';
import {MailOutline as MailIcon} from 'styled-icons/material';
import {Github as GithubIcon} from 'styled-icons/boxicons-logos';
import MainFindingsPdf from './main-findings.pdf';
import MethodologyPdf from './methodology.pdf';
import Pictures from './Pictures';
import Graphs from './Graphs';
import translate from './translate';
import {Context} from './store';
import './App.scss';

export default class App extends React.Component {
  render() {
    const {language, toggleLanguage} = this.context;
    return (
      <div className={'container'}>
        <div className={'language-selector'} onClick={toggleLanguage}>
          {language === 'en' ? 'Deutsch' : 'English'}
        </div>
        <div className='title'>
          <div className={'block-container'}>
            <div>{translate('page_title')}</div>
            <div className={'subtitle'}>{translate('subtitle')}</div>
          </div>
        </div>
        <div className={'page'}>
          <div className={'block intro'}>
            <p>{translate(['introduction', 'p1'])}</p>
            <p>{translate(['introduction', 'p2'])}</p>
          </div>
          <h3>{translate(['header', 'reports'])}</h3>
          <div className={'block with-background'}>
            <div className={'subheader'}>{translate(['subheader', 'main_findings'])}</div>
            <div className='paragraph'>
              {translate(['block', 'main_findings', 'p1'])}
            </div>
            <div className='paragraph'>
              {translate(['block', 'main_findings', 'p2'])}
            </div>
          </div>
          <Graphs key={`language-${language}`}/>
          <a className={'download-button'} href={MainFindingsPdf} target='_blank' rel='noopener noreferrer'>
            <DownloadIcon/>
            {translate(['button', 'main_findings'])}
          </a>
          <div className={'block with-background'}>
            <div className={'subheader'}>{translate(['subheader', 'methodology'])}</div>
            <div className='text'>
              {translate(['block', 'methodology'])}
            </div>
          </div>
          <a className={'download-button'} href={MethodologyPdf} target='_blank' rel='noopener noreferrer'>
            <DownloadIcon/>
            {translate(['button', 'methodology'])}
          </a>
          <h3>{translate(['header', 'project'])}</h3>
          <div className={'block'}>
            {translate(['block', 'project'])} <a href="https://www.ipz.uzh.ch/en/studium/MA/capstones.html" target='_blank' rel='noopener noreferrer'>{translate(['block', 'here'])}</a>.
          </div>
          <h3>{translate(['header', 'team'])}</h3>
          <div className={'block'}>
            {translate(['block', 'team'])}
          </div>
          <Pictures/>
        </div>
        <div className={'footer'}>
          <div className={'block-container'}>
            <h3>{translate(['header', 'get_in_touch'])}</h3>
            <div className={'block'}>
              {translate(['block', 'get_in_touch'])}
            </div>
            <div className={'contact-icons'}>
              <a className={'mail-link'} href={`mailto:theoda.woeffray@bluewin.ch`}><MailIcon/></a>
              <a className={'github-link'} href={`https://github.com/rikmelis/capstone`} target='_blank' rel='noopener noreferrer'><GithubIcon/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.contextType = Context;
