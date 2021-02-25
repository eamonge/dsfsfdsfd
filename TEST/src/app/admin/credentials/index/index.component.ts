import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class IndexComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['license', 'regulator', 'fee'];
  expandedElement: LicenseElement | null;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface LicenseElement {
  license: string;
  issued: string;
  requirement: string;
  regulator: string;
  fee: string;
  description: string;
}

const ELEMENT_DATA: LicenseElement[] = [
  {
    "issued": "09/10/08",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "09/10/09",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "24/12/09",
    "requirement": "Credit Service Organization",
    "license": "CSO3501",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$500.00",
    "description": "License for Credit Repair/Credit and Debt Counseling"
  },
  {
    "issued": "15/01/10",
    "requirement": "Covered Service Provider (Independent)",
    "license": "3379",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,500.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "15/01/10",
    "requirement": "Covered Service Provider (Associate)",
    "license": "47088",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,000.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "31/03/10",
    "requirement": "Debt Adjuster",
    "license": "DA22100",
    "regulator": "NV Financial Institutions Division",
    "fee": "$3,000.00",
    "description": "License for Credit and Debt Counseling including Debt negotiation of Unsecured Debts (Repealed by State of NV 2011)"
  },
  {
    "issued": "27/06/10",
    "requirement": "City Business",
    "license": "M18-04801",
    "regulator": "City of Las Vegas",
    "fee": "$200.00",
    "description": "Las Vegas City Office Address"
  },
  {
    "issued": "09/10/10",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "24/12/10",
    "requirement": "Credit Service Organization",
    "license": "CSO3501",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$500.00",
    "description": "License for Credit Repair/Credit and Debt Counseling"
  },
  {
    "issued": "15/01/11",
    "requirement": "Covered Service Provider (Independent)",
    "license": "3379",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,500.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "15/01/11",
    "requirement": "Covered Service Provider (Associate)",
    "license": "47088",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,000.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "09/10/11",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "24/12/11",
    "requirement": "Credit Service Organization",
    "license": "CSO3501",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$500.00",
    "description": "License for Credit Repair/Credit and Debt Counseling"
  },
  {
    "issued": "15/01/12",
    "requirement": "Covered Service Provider (Independent)",
    "license": "3379",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,500.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "15/01/12",
    "requirement": "Covered Service Provider (Associate)",
    "license": "47088",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,000.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "18/05/12",
    "requirement": "County Fictitious Name Filing",
    "license": "Damian Falcone & Company",
    "regulator": "Clark County",
    "fee": "$20.00",
    "description": "Registered Do Business As Name"
  },
  {
    "issued": "09/10/12",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "24/12/12",
    "requirement": "Credit Service Organization",
    "license": "CSO3501",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$500.00",
    "description": "License for Credit Repair/Credit and Debt Counseling"
  },
  {
    "issued": "15/01/13",
    "requirement": "Covered Service Provider (Independent)",
    "license": "3379",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,500.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "15/01/13",
    "requirement": "Covered Service Provider (Associate)",
    "license": "47088",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,000.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "13/05/13",
    "requirement": "Clark County Property Tax",
    "license": "Property Tax",
    "regulator": "Clark County",
    "fee": "$30.00",
    "description": "Clark County Property Tax"
  },
  {
    "issued": "09/10/13",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "24/12/13",
    "requirement": "Credit Service Organization",
    "license": "CSO3501",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$500.00",
    "description": "License for Credit Repair/Credit and Debt Counseling"
  },
  {
    "issued": "15/01/14",
    "requirement": "Covered Service Provider (Independent)",
    "license": "3379",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,500.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "15/01/14",
    "requirement": "Covered Service Provider (Associate)",
    "license": "47088",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,000.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "28/01/14",
    "requirement": "State of Nevada Business License",
    "license": "S.0174255",
    "regulator": "NV Real Estate Division",
    "fee": "$183.00",
    "description": "License for Real Estate Salesperson "
  },
  {
    "issued": "09/10/14",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "01/11/14",
    "requirement": "Clark County Business",
    "license": "2001925-054-120",
    "regulator": "Clark County",
    "fee": "$200.15",
    "description": "Clark Count Office Address"
  },
  {
    "issued": "26/11/14",
    "requirement": "State of Nevada Business License",
    "license": "NV20141727930",
    "regulator": "NV Secretary of State",
    "fee": "$350.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "26/11/14",
    "requirement": "State of Nevada Business License",
    "license": "NV20141727930",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "24/12/14",
    "requirement": "Credit Service Organization",
    "license": "CSO3501",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$500.00",
    "description": "License for Credit Repair/Credit and Debt Counseling"
  },
  {
    "issued": "12/01/15",
    "requirement": "County Fictitious Name Filing",
    "license": "2015011210000463-0",
    "regulator": "Clark County",
    "fee": "$200.15",
    "description": "Registered Do Business As Name"
  },
  {
    "issued": "15/01/15",
    "requirement": "Covered Service Provider (Independent)",
    "license": "3379",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,500.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "15/01/15",
    "requirement": "Covered Service Provider (Associate)",
    "license": "47088",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,000.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "04/02/15",
    "requirement": "City Business",
    "license": "G63-01068",
    "regulator": "City of Las Vegas",
    "fee": "$50.00",
    "description": "Las Vegas City Office Address"
  },
  {
    "issued": "20/08/15",
    "requirement": "Uniform Debt Management",
    "license": "DMSM11034",
    "regulator": "NV Financial Institutions Division",
    "fee": "$3,000.00",
    "description": "License for Credit and Debt Counseling including Debt negotiation of Unsecured Debts"
  },
  {
    "issued": "09/10/15",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "23/11/15",
    "requirement": "Clark County Business",
    "license": "2004314.053-120�",
    "regulator": "Clark County",
    "fee": "$154.25",
    "description": "Clark Count Office Address"
  },
  {
    "issued": "23/11/15",
    "requirement": "State of Nevada Business License",
    "license": "NV20151696487",
    "regulator": "NV Secretary of State",
    "fee": "$350.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "23/11/15",
    "requirement": "State of Nevada Business License",
    "license": "NV20151696487",
    "regulator": "NV Secretary of State",
    "fee": "$350.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "26/11/15",
    "requirement": "State of Nevada Business License",
    "license": "NV20141727930",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "24/12/15",
    "requirement": "Credit Service Organization",
    "license": "CSO3501",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$500.00",
    "description": "License for Credit Repair/Credit and Debt Counseling"
  },
  {
    "issued": "12/01/16",
    "requirement": "County Fictitious Name Filing",
    "license": "2015011210000463-0",
    "regulator": "Clark County",
    "fee": "$154.25",
    "description": "Registered Do Business As Name"
  },
  {
    "issued": "15/01/16",
    "requirement": "Covered Service Provider (Independent)",
    "license": "3379",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,000.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "15/01/16",
    "requirement": "Covered Service Provider (Associate)",
    "license": "47088",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$1,000.00",
    "description": "Mortgage Debt and Bankruptcy Counseling"
  },
  {
    "issued": "04/02/16",
    "requirement": "City Business",
    "license": "G63-01068",
    "regulator": "City of Las Vegas",
    "fee": "$50.00",
    "description": "Las Vegas City Office Address"
  },
  {
    "issued": "14/03/16",
    "requirement": "State of Nevada Business License",
    "license": "NV20161155036",
    "regulator": "NV Secretary of State",
    "fee": "$725.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "14/03/16",
    "requirement": "State of Nevada Business License",
    "license": "NV20161155036",
    "regulator": "NV Secretary of State",
    "fee": "$725.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "20/08/16",
    "requirement": "Uniform Debt Management",
    "license": "DMSM11034",
    "regulator": "NV Financial Institutions Division",
    "fee": "$3,000.00",
    "description": "License for Credit and Debt Counseling including Debt negotiation of Unsecured Debts"
  },
  {
    "issued": "09/10/16",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "23/11/16",
    "requirement": "State of Nevada Business License",
    "license": "NV20151696487",
    "regulator": "NV Secretary of State",
    "fee": "$350.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "26/11/16",
    "requirement": "State of Nevada Business License",
    "license": "NV20141727930",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "24/12/16",
    "requirement": "Credit Service Organization",
    "license": "CSO3501",
    "regulator": "NV Division of Mortgage Lending",
    "fee": "$500.00",
    "description": "License for Credit Repair/Credit and Debt Counseling"
  },
  {
    "issued": "04/01/17",
    "requirement": "Certificate of Dissolution",
    "license": "NV20161155036",
    "regulator": "NV Secretary of State",
    "fee": "$100.00",
    "description": "State of Nevada Business Closure"
  },
  {
    "issued": "12/01/17",
    "requirement": "County Fictitious Name Filing",
    "license": "2015011210000463-0",
    "regulator": "Clark County",
    "fee": "$200.15",
    "description": "Registered Do Business As Name"
  },
  {
    "issued": "04/02/17",
    "requirement": "City Business",
    "license": "G63-01068",
    "regulator": "City of Las Vegas",
    "fee": "$50.00",
    "description": "Las Vegas City Office Address"
  },
  {
    "issued": "09/10/17",
    "requirement": "State of Nevada Business License",
    "license": "C20081009-1526",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "26/11/17",
    "requirement": "State of Nevada Business License",
    "license": "NV20141727930",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "26/11/18",
    "requirement": "State of Nevada Business License",
    "license": "NV20141727930",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  },
  {
    "issued": "12/08/19",
    "requirement": "Mexican Business License",
    "license": "7812345678",
    "regulator": "Mexico",
    "fee": "$3,000.00",
    "description": "License for Business Incorporation in Mexico"
  },
  {
    "issued": "26/11/19",
    "requirement": "State of Nevada Business License",
    "license": "NV20141727930",
    "regulator": "NV Secretary of State",
    "fee": "$500.00",
    "description": "State of Nevada Business License"
  }
];