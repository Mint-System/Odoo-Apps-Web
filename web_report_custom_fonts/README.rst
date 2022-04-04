.. image:: https://img.shields.io/badge/licence-GPL--3-blue.svg
    :target: http://www.gnu.org/licenses/gpl-3.0-standalone.html
    :alt: License: GPL-3

=======================
Web Report Custom Fonts
=======================

Enables various custom fonts.

For a detailed documentation have a look at https://www.odoo-wiki.org/.

.. image:: https://raw.githubusercontent.com/Mint-System/Wiki/master/assets/icon-box.png
  :height: 100
  :width: 100
  :alt: Icon

Configuration
~~~~~~~~~~~~~

In your report set css class to apply custom font.

.. code-block:: xml

    <xpath expr="/t[1]/t[1]/div[1]/h2[1]" position="attributes">
      <attribute name="class">mt16 use-font-opensans-regular</attribute>
    </xpath>

Maintainer
==========

.. image:: https://raw.githubusercontent.com/Mint-System/Wiki/master/assets/mint-system-logo.png
  :target: https://www.mint-system.ch

This module is maintained by Mint System GmbH.

For support and more information, please visit `our Website <https://www.mint-system.ch>`__.
