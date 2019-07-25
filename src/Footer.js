import React, { Component } from 'react';
import moment from 'moment';

class Footer extends Component {
	render() {
		return (
			<footer className="footer has-background-white-ter is-marginless">
				<div className="content-has-text-centered">
					<p>
						<strong>Rep Tracker</strong> built by{' '}
						<a href="https://www.bokasolutions.com" target="_blank" rel="noopener noreferrer">
							Wayne Boka, Web Developer
						</a>
						.
					</p>
					<p>
						The source code is licensed{' '}
						<a href="http://opensource.org/licenses/mit-license.php" target="_blank" rel="noopener noreferrer">
							MIT
						</a>{' '}
						and can by found on{' '}
						<a href="https://www.github.com/wboka/rep-tracker" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
						.
					</p>
					<p>&copy; {moment().format('YYYY')} Wayne Boka, All Rights Reserved</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
