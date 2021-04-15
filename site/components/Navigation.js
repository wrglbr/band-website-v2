import React from 'react';
import cx from 'classnames';
import { withStyles, Highlight } from 'arwes';

import TextIcon from './TextIcon';
import Link from './Link';

const linksList = [{
  name: 'About',
  icon: 'apps',
  href: '/about'
}, {
  name: 'Members',
  icon: 'chip',
  href: '/members'
}, {
  name: 'Tools',
  icon: 'chip',
  href: '/tools'
}, {
  name: 'Join BAND',
  icon: 'chip',
  href: '/join'
}];

const styles = theme => ({
  root: {
    display: 'inline-block',
    textAlign: 'left',
  },
  link: {
    display: 'inline-block',
    lineHeight: '45px',
    fontSize: 21,
    '& i': {
      marginRight: theme.padding / 2,
      fontSize: 24,
    },
  },
  button: {
    padding: [0, theme.padding / 2],
  },
});

const Navigation = props => {
  const {
    theme,
    classes,
    show,
    onLink,
    className,
    ...etc
  } = props;
  const cls = cx(classes.root, className);
  return (
    <nav className={cls} {...etc}>
      {linksList.map((linkItem, index) => (
      <Link
        key={index}
        className={classes.link}
        href={linkItem.href}
        onLink={onLink}
        target={linkItem.target}
      >
        <Highlight className={classes.button} animate layer='header'>
          <TextIcon show={show} icon={linkItem.icon}>
            {linkItem.name}
          </TextIcon>
        </Highlight>
      </Link>
      ))}
    </nav>
  );
};

export default withStyles(styles)(Navigation);
