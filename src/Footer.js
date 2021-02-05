import React from 'react';
import { Contain, Wrapper, Row, Column, Link, Title } from "./FooterStyle";

export default function Footer({ children, ...restProps}) {
	return <Contain {...restProps}>{children}</Contain>
};

Footer.Wrapper = function FooterWrapper({ children, ...restProps}) {
	return <Wrapper {...restProps}>{children}</Wrapper>
};

Footer.Row = function FooterRow({ children, ...restProps}) {
	return <Row {...restProps}>{children}</Row>
};

Footer.Column = function FooterColumn({ children, ...restProps}) {
	return <Column {...restProps}>{children}</Column>
};

Footer.Link = function FooterLink({ children, ...restProps}) {
	return <Link {...restProps}>{children}</Link>
};

Footer.Title = function FootertTitle({ children, ...restProps}) {
	return <Title {...restProps}>{children}</Title>
};