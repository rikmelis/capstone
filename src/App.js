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
        <div className={'page-title'}>
          <div className={'block-container'}>
            <div>{translate('page_title')}</div>
            <div className={'subtitle'}>{translate('subtitle')}</div>
          </div>
        </div>
        <div className={'page'}>
          <div className={'block intro'}>
            <div className={'paragraph'}>{translate(['introduction', 'p1'])}</div>
            <div className={'paragraph'}>{translate(['introduction', 'p2'])}</div>
          </div>
          <div className={'block'}>
            <div className={'header'}>{translate(['header', 'determining_type'])}</div>
            <div className={'paragraph'}>{translate(['block', 'determining_type', 'p1'])}</div>
            <div className={'paragraph'}>{translate(['block', 'determining_type', 'p2'])}</div>
            <div className={'paragraph'}>{translate(['block', 'determining_type', 'p3'])}</div>
          </div>
          <div className={'block with-background'}>
            <div className={'header'}>{translate(['header', 'main_findings'])}</div>
            <div className={'paragraph'}>
              {translate(['block', 'main_findings', 'p1'])}
            </div>
            <div className={'paragraph'}>
              {translate(['block', 'main_findings', 'p2'])}
            </div>
          </div>
          <Graphs key={`language-${language}`}/>
          <a className={'download-button'} href={MainFindingsPdf} target='_blank' rel='noopener noreferrer'>
            <DownloadIcon/>
            {translate(['button', 'main_findings'])}
          </a>
          <div className={'block with-background'}>
            <div className={'header'}>{translate(['header', 'methodology'])}</div>
            <div className={'paragraph'}>
              {translate(['block', 'methodology'])}
            </div>
          </div>
          <a className={'download-button'} href={MethodologyPdf} target='_blank' rel='noopener noreferrer'>
            <DownloadIcon/>
            {translate(['button', 'methodology'])}
          </a>
          <div className={'block'}>
            <div className={'header'}>{translate(['header', 'project'])}</div>
            <div className={'paragraph'}>
              {translate(['block', 'project'])} <a href='https://www.ipz.uzh.ch/en/studium/MA/capstones.html' target='_blank' rel='noopener noreferrer'>{translate(['block', 'here'])}</a>.
            </div>
          </div>
          <div className={'block'}>
            <div className={'header'}>{translate(['header', 'team'])}</div>
            <div className={'paragraph'}>
              {translate(['block', 'team'])}
            </div>
          </div>
          <Pictures/>
        </div>
        <div className={'footer'}>
          <div className={'block-container'}>
            <div className={'block'}>
              <div className={'header'}>{translate(['header', 'get_in_touch'])}</div>
              <div className={'paragraph'}>
                {translate(['block', 'get_in_touch'])}
              </div>
            </div>
            <div className={'contact-icons'}>
              <a className={'mail-link'} href={`mailto:ahtd@fake.com`}><MailIcon/></a>
              <a className={'github-link'} href={`https://github.com/rikmelis/capstone`} target='_blank' rel='noopener noreferrer'><GithubIcon/></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.contextType = Context;
