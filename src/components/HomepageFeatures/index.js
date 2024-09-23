import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Share Your Experinces',
    Svg: require('@site/static/img/share.svg').default,
    description: (
      <>
        Sharing your experiences with others can inspire and provide valuable insights, 
        helping them navigate similar challenges or opportunities.
      </>
    ),
  },
  {
    title: 'Connect With Fellow Travelers',
    Svg: require('@site/static/img/travelling.svg').default,
    description: (
      <>
        Connecting with fellow travelers allows you to share experiences, tips, and recommendations, 
        enriching your journey with diverse perspectives. 
        It also creates opportunities for friendships and memories that can make your travels more fulfilling and enjoyable.
      </>
    ),
  },
  {
    title: 'Now Create Your Post',
    Svg: require('@site/static/img/images.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
