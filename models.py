# -*- coding: utf-8 -*-

from openerp import models, fields, api
import logging
_logger = logging.getLogger(__name__)


class website_seller(models.Model):
	_name = 'website.best.sellers'

	category = fields.Char(required=True,string='Category Name')
	category_id = fields.Many2one("product.public.category",string="Category ID")
	product_id = fields.Many2many("product.template",string="Product ID")
# class website_best_sellers(models.Model):
#     _name = 'website_best_sellers.website_best_sellers'

#     name = fields.Char()
	@api.onchange('category_id')
	def on_change_category_id(self):
		_logger.warning(self.category_id)
		# if self.category_id:
		producters = self.env['product.template'].search([('public_categ_ids','in',self.category_id.id)])
		product_ids = [producter.id for producter in producters]
		_logger.warning(product_ids)
		res = {
		        'domain': {
		            'product_id': [('id', 'in', product_ids)],
		        }
		    }
		return res