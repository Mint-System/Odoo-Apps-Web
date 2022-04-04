{
    'name': "Web Report Custom Fonts",

    'summary': """
        Enables various custom fonts.
    """,
    
    'author': 'Mint System GmbH, Odoo Community Association (OCA)',
    'website': 'https://www.mint-system.ch',
    'category': 'Customizations',
    'version': '14.0.1.0.4',
    'license': 'AGPL-3',
    
    'depends': ['web'],

    'data': [
        'views/assets.xml',
    ],

    'installable': True,
    'application': False,
    'auto_install': False,
    "images": ["images/screen.png"],
}