{
    'name': 'Referral Analytics Dashboard',
    'version': '1.0',
    'summary': 'Tampilan Dashboard Analitik Referral',
    'category': 'Sales',
    'depends': ['base', 'web'],
    'data': [
        'views/dashboard_action.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'referral_dashboard/static/src/js/dashboard.js',
            'referral_dashboard/static/src/xml/dashboard.xml',
        ],
    },
    'installable': True,
    'application': True,
}