import * as React from 'react';
import styles from './AppName.module.scss';
import type { IAppNameProps } from './IAppNameProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AppName extends React.Component<IAppNameProps, {}> {
  public render(): React.ReactElement<IAppNameProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      graphValue,
      hasTeamsContext,
      userDisplayName
    } = this.props

    return <section className={`${styles.appName} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={styles.welcome}>
        <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
        <h2>Well done, {escape(userDisplayName)}!</h2>
        <div>{environmentMessage}</div>
        <div>Web part property value: <strong>{escape(description)}</strong></div>
      </div>
      <pre>{graphValue}</pre>
    </section>
  }
}