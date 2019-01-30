/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';

export const name = 'core/search';

export const settings = {
	title: __( 'Search' ),

	description: __( 'A search form for your site.' ),

	icon: 'search',

	category: 'widgets',

	keywords: [ __( 'find' ) ],

	edit,

	save() {
		return null;
	},
};
