# -*- coding: utf-8 -*-
from odoo import fields, api, models, _
from odoo.exceptions import ValidationError
from datetime import datetime, date



class RecruitPaymentStatement(models.TransientModel):
    _name = 'recruit.statement.wizard'
    _description = 'Monthly payment statement'

    # @api.model
    # def default_get(self, fields):
    #     res = super(RecruitPaymentStatement, self).default_get(fields)
    #     if (self.env.context.get('active_id')):
    #         regId = self.env.context.get('active_id')
    #
    #         result = self.env['hotel.register'].browse(regId)
    #
    #         res['guest_id'] = regId
    #         res['name'] = result.name
    #         res['booking_ref'] = result.booking_ref
    #         res['name'] = result.name
    #         res['arr_date'] = result.arr_date
    #         res['dep_date'] = result.dep_date
    #         res['booking_id'] = result.booking_id
    #
    #         return res


    partner_id = fields.Many2one('res.partner', 'Customer/Partner')
    start_date = fields.Date('Start Date')


    def get_summary(self):

        if(self.partner_id):
            recruits = self.env['hr.applicant'].search_read([
                ('partner_id', '=', self.partner_id.id)], ['id', 'name', 'slot_expiry', 'partner_id', 'insurance_expiry', 'wp_expiry'])

            # print(recruits)
            for rec in recruits:
                if(rec['slot_expiry']):
                    if(rec['slot_expiry'] <= self.start_date):
                        new_rec = {
                            'recruit_id': rec['id'],
                            'partner_id': self.partner_id.id,
                            'slot_fee': 501,
                            'visa_fee': 0,
                            'insurance': 0,
                            'name': rec['name'],
                            'statement_date': self.start_date

                        }
                        self.env['recruit.statement.detail.wizard'].create(new_rec)

                if (rec['insurance_expiry']):
                    if (rec['insurance_expiry'] <= self.start_date):
                        new_rec = {
                            'recruit_id': rec['id'],
                            'partner_id': self.partner_id.id,
                            'slot_fee': 0,
                            'visa_fee': 0,
                            'insurance': 800,
                            'name': rec['name'],
                            'statement_date': self.start_date

                        }
                        self.env['recruit.statement.detail.wizard'].create(new_rec)

                if (rec['wp_expiry']):
                    if (rec['wp_expiry'] <= self.start_date):
                        new_rec = {
                            'recruit_id': rec['id'],
                            'partner_id': self.partner_id.id,
                            'slot_fee': 0,
                            'visa_fee': 350,
                            'insurance': 0,
                            'name': rec['name'],
                            'statement_date': self.start_date

                        }
                        self.env['recruit.statement.detail.wizard'].create(new_rec)

        results = self.env['recruit.statement.detail.wizard'].search_read([
            ('partner_id', '=', self.partner_id.id), ('statement_date', '=', self.start_date)], ['id', 'name', 'slot_fee', 'partner_id', 'visa_fee', 'insurance', 'statement_date'])

        print('results.....', results)

    # def action_extend_guest(self):
    #     print("guest extend clicked", self.new_dep_date, self.booking_id)
    #     dep_dt = self.dep_date
    #     n_date = self.new_dep_date
    #     bk_id = self.booking_id
    #     reg_id = self.guest_id
    #     new_dep_date = n_date.date().strftime("%Y-%m-%d") + " 06:00"
    #
    #     if (n_date > dep_dt):
    #
    #         vals1 = {
    #             'check_out_date': new_dep_date,
    #         }
    #         vals2 = {
    #             'dep_date': new_dep_date,
    #         }
    #         self.env['sale.order'].browse(bk_id).write(vals1)
    #         self.env['hotel.register'].browse(reg_id).write(vals2)
    #
    #     else:
    #         raise ValidationError(
    #             _('Extend date must be grater than departure date!!!'))

class RecruitPaymentDetails(models.TransientModel):
    _name = 'recruit.statement.detail.wizard'
    _description = 'Monthly payment statement'

    recruit_id = fields.Integer('Id')
    name = fields.Char('Name')
    slot_fee = fields.Float('Slot Fee', default=0)
    insurance = fields.Float('Insurance', default=0)
    visa_fee = fields.Float('Visa Fee', default=0)
    partner_id = fields.Many2one('res.partner', 'Customer/Partner')
    statement_date = fields.Date('Statement Date')







