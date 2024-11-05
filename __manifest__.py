
{
    'name': 'Appeul Recruit Inherit 1.7.0',
    'version': '18.0.1.6.9',
    'summary': 'Appeul Recruit Inherit',
    'description': """Appeul Recruit Inherit""",
    'author': 'Appeul Services',
    'company': 'Appeul',
    'maintainer': 'Appeul Services',
    'category': 'Sales',
    'website': 'https://www.appeul.com',
    'sequence':"-1110",
    'depends': ['base','hr_recruitment', 'hr'],
    'data': [
        'security/ir.model.access.csv',
        # 'data/mail_template_data.xml',
        # 'data/cron_job.xml',
        # 'wizard/statement_wizard.xml',
        'views/recruit_inherit_view.xml',
        'views/xpat_worktype_view.xml',
         # 'views/header_footer_view.xml',
        'views/view_recruit_applicants.xml',
        'report/appointment_letter.xml',
        'report/offer_letter.xml',
        'report/appointment_letter_individual.xml',
        'report/im30.xml',
        'report/insurance_request.xml',
        'report/srilankan_embassy_domestic_agreement.xml',
        'report/srilankan_embassy_company_agreement.xml',
        'report/report.xml',
    ],

    # 'assets': {
    #         'web.assets_backend': [
    #             'ap_recruitment18/static/src/components/**/*.js',
    #             'ap_recruitment18/static/src/components/**/*.xml',
    #             'ap_recruitment18/static/src/components/**/*.scss',
    #         ]
    #     },

    'installable': True,
    'application': True,


    'license': 'LGPL-3',

}
