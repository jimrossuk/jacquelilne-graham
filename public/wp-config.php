<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4jK.>:`1~UfsDXvW5 X9C1`wqP(.^MYXIO7F_y|)[Wh5QNY|h7Pqg.NH4e!b>nio' );
define( 'SECURE_AUTH_KEY',  '+j$;VS01;v/>3b}n>32e=O[NrBa@vAbth~E-QZ:C)RL6*cr_*|4M{?Uz~pzl._RT' );
define( 'LOGGED_IN_KEY',    'x1wNq4ql=W~Z-sZisd!x<?/Ckw!rpp6F-Ch{`WcJRDxpUEh ,dO[Nfvi&$m=|sq5' );
define( 'NONCE_KEY',        'l%iLS_.b+}N~z]Huk,iA7F@NiszP2dX;Ri8-%pY$Gn{leAfj,[Ev+lONGjq.}d]I' );
define( 'AUTH_SALT',        'x)KPV6+]F$)(@l2cX>V&h@9pZ;&4t()#zBvrPU$G4WdDfJ2%DnIG6o1/!X;;Xi@d' );
define( 'SECURE_AUTH_SALT', '0$ZQ} ;qg(Fp{V(R)>`5$)`+g NJj8Ttcel)h@N;3sbxb=+px^l.b]-T6Hw63A. ' );
define( 'LOGGED_IN_SALT',   'yS/u7D<K&a0(QRun$@hHm4S5!Axw&Nl$EcUxvVWTJR<)s&Qzqr)@M]1k*!P#Qi5^' );
define( 'NONCE_SALT',       '9(u!;:tf8fg]5*+o%0>T@$_ct~|xk5x}!e-/8Y}2lOc_9llWc}ID[s%OCxx6*FwA' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
