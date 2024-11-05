# -*- coding: utf-8 -*-
from odoo import fields, models, _
import os
import subprocess
from odoo.exceptions import ValidationError
from datetime import date, timedelta




def is_valid_folder(my_location):
    return os.path.exists(my_location) and os.path.isdir(my_location)
def open_folder(location):
    subprocess.Popen(['explorer', location])




class XpatWorkTypes(models.Model):
    _name = "xpat.worktypes"
    _description = "Xpat work types"

    name = fields.Char(string="Xpat Work Type", required=True)


class XpatWorkSites(models.Model):
    _name = "xpat.worktsites"
    _description = "Xpat work sites"

    name = fields.Char(string="Xpat Work Site", required=True)
    address = fields.Text('Work Site Address')


class InheritPartner(models.Model):
    _inherit = 'hr.applicant'

    permanent_address = fields.Text('Permanent Address')
    current_address = fields.Text('Current Address')
    other_benefits = fields.Html('Other Benefits')
    passport_number = fields.Char('Passport Number')
    pp_issue = fields.Date('Passport Issue Date')
    pp_expiry = fields.Date('Passport Expiry Date')
    nationality = fields.Char('Nationality')
    xpat_position = fields.Char('Xpat Position')
    remuneration = fields.Char('Remuneration')
    working_hours = fields.Char('Working Hours')
    mobile_number = fields.Char('Mobile Number')
    salary_payment = fields.Char('Salary Payment')
    emergency_contact_name = fields.Char('Emergency Contact Name')
    emergency_contact_number = fields.Char('Emergency Contact Number')
    sponsor_name = fields.Char('Sponsor Name')
    sponsor_position = fields.Char('Sponsor Position')
    birth_date = fields.Date('Date of Birth')
    contract_start = fields.Date('Contract Start')
    contract_end = fields.Date('Contract End')
    apply_date = fields.Date('Apply Date')
    work_type_id = fields.Many2one('xpat.worktypes', string="Work Type")
    work_site_id = fields.Many2one('xpat.worktsites', string="Work Site")
    contract_status_id = fields.Many2one('hr.contract.type', string="Contract Status")
    is_married = fields.Selection([('yes', 'Yes'), ('no', 'No')],
                                 default='no', string="Is Married")
    gender = fields.Selection([('male', 'Male'), ('female', 'Female')],
                                  default='male', string="Gender")
    visa_type = fields.Selection([('work', 'Work Visa'), ('business', 'Business Visa'), ('special','Special Visa')],
                              default='work', string="Visa Type")
    wp_number = fields.Char('Work Permit Number')
    wp_expiry = fields.Date('WP Expiry Date')
    slot_expiry = fields.Date('Slot Expiry Date')
    card_expiry = fields.Date('Card Expiry Date')
    insurance_expiry = fields.Date('Insurance Expiry Date')
    arrival_date = fields.Date('Arrival Date')
    departure_date = fields.Date('Departure Date')
    medical_expiry = fields.Date('Medical Expiry Date')
    win_local_folder = fields.Char('Windows File Location')
    person_title = fields.Selection([('mr', 'Mr.'), ('mrs', 'Mrs.'), ('miss', 'Miss.')],
                                  default='mr', string="Person Title")
    pp_place_issue = fields.Char('Place of Issue')
    pp_profession = fields.Char('PP: Profession')
    short_name = fields.Char('Short Name')
    client_id = fields.Many2one('res.partner', string="Client/Customer")

    def open_win_folder(self):
        print("open_win_folder click", self.win_local_folder)
        isvalid = is_valid_folder(self.win_local_folder)
        print(isvalid)
        if(isvalid):
            open_folder(self.win_local_folder)
        else:
            raise ValidationError(_('Invalid Path!!'))


    def wp_expiry_email(self):
        fifteen_day_exp = date.today() + timedelta(days=15)


        results = self.env['hr.applicant'].search_read([
            ('wp_expiry', '=', fifteen_day_exp), ('stage_id', '=', 'Arrived')],
            ['id', 'partner_name', 'wp_expiry'])

        if results:
            for rs in results:
                template_id = self.env.ref('ap_recruitment18.mail_template_data_wp_expiry').id
                template = self.env['mail.template'].browse(template_id)
                template.send_mail(rs['id'], force_send=True)



class SetCustomerHeaderFooter(models.Model):
    """"""
    _inherit = "res.partner"

    customer_header = fields.Image("Header")
    customer_footer = fields.Image("Footer")
    customer_seal = fields.Image("Customer Seal")
    customer_sign = fields.Image("Customer Sign")
    customer_header_width = fields.Char("Header Width", default="1000")
    customer_header_height = fields.Char("Header height", default="100")
    customer_footer_width = fields.Char("Footer Width", default="1000")
    customer_footer_height = fields.Char("Footer height", default="75")
    shareholder_id = fields.Many2one('res.company', string="Shareholder")



class InheritCpmpany(models.Model):
    _inherit = 'res.company'

    shareholder_ids = fields.One2many('res.partner', 'shareholder_id', string="Shareholder")
