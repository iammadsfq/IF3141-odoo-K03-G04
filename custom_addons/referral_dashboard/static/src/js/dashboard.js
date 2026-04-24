/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class ReferralDashboard extends Component {
    setup() {
        // Data dummy UI (Implementasi asli nanti disini)
        this.kpiData = {
            totalReferrals: 342,
            totalRevenue: "Rp 125.500.000",
            totalPoints: 15400
        };

        this.topReferrers = [
            { id: 1, name: "Budi Santoso", referrals: 45, points: 2250 },
            { id: 2, name: "Siti Aminah", referrals: 38, points: 1900 },
            { id: 3, name: "Andi Darmawan", referrals: 29, points: 1450 },
            { id: 4, name: "Rina Gunawan", referrals: 15, points: 750 },
            { id: 5, name: "Eko Pratama", referrals: 12, points: 600 }
        ];
    }
}

ReferralDashboard.template = "referral_dashboard.DashboardTemplate";

registry.category("actions").add("referral_dashboard_client_action", ReferralDashboard);