import React from 'react';
import {Download as DownloadIcon} from 'styled-icons/boxicons-regular';
import {MailOutline as MailIcon} from 'styled-icons/material';
import {Github as GithubIcon} from 'styled-icons/boxicons-logos';
import MainFindingsPdf from './main-findings.pdf';
import MethodologyPdf from './methodology.pdf';
import Pictures from './Pictures.js';
import Graphs from './Graphs.js';
import {translate} from './translate.js';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'en',
    };
  }

  translate(key) {
    return translate(this.state.language, key);
  }

  changeLanguage(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      language: this.state.language === 'en' ? 'de' : 'en',
    });
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'language-selector'} onClick={(event) => this.changeLanguage(event)}>
          {this.state.language === 'en' ? 'Deutsch' : 'English'}
        </div>
        <div className='title'>
          <div>{this.translate('page_title')}</div>
          <div className={'subtitle'}>{this.translate('subtitle')}</div>
        </div>
        <div className={'page'}>
          <div className={'intro'}>
            <p>{this.translate(['introduction', 'p1'])}</p>
            <p>{this.translate(['introduction', 'p2'])}</p>
          </div>
          <h3>{this.translate(['header', 'reports'])}</h3>
          <div className={'block with-image'}>
            <div className={'subheader'}>{this.translate(['subheader', 'main_findings'])}</div>
            <div className='text'>
              <p>{this.translate(['block', 'main_findings', 'p1'])}</p>
              <p>{this.translate(['block', 'main_findings', 'p2'])}</p>
            </div>
          </div>
          <Graphs/>
          <a className={'download-button'} href={MainFindingsPdf} target='_blank' rel='noopener noreferrer'>
            <DownloadIcon/>
            {this.translate(['button', 'main_findings'])}
          </a>
          <div className={'block with-image'}>
            <div className={'subheader'}>{this.translate(['subheader', 'methodology'])}</div>
            <div className='text'>
              {this.translate(['block', 'methodology'])}
            </div>
          </div>
          <a className={'download-button'} href={MethodologyPdf} target='_blank' rel='noopener noreferrer'>
            <DownloadIcon/>
            {this.translate(['button', 'methodology'])}
          </a>
          <h3>{this.translate(['header', 'project'])}</h3>
          <div className={'block'}>
            {this.translate(['block', 'project'])} <a href="https://www.ipz.uzh.ch/en/studium/MA/capstones.html" target='_blank' rel='noopener noreferrer'>{this.translate(['block', 'here'])}</a>.
          </div>
          <h3>{this.translate(['header', 'team'])}</h3>
          <div className={'block'}>
            {this.translate(['block', 'team'])}
          </div>
          <Pictures/>
        </div>
        <div className={'footer'}>
          <h3>{this.translate(['header', 'get_in_touch'])}</h3>
          <div className={'block'}>
            {this.translate(['block', 'get_in_touch'])}
          </div>
          <div className={'contact-icons'}>
            <a className={'mail-link'} href={`mailto:theoda.woeffray@bluewin.ch`}><MailIcon/></a>
            <a className={'github-link'} href={`https://github.com/rikmelis/capstone`} target='_blank' rel='noopener noreferrer'><GithubIcon/></a>
          </div>
        </div>
      </div>
    );
  }
}

